import tabledata from '../tabledata';

export default Ractive.extend({
	components: {
		tabledata: tabledata,
	},
	template: `
			<div>

				<br>
				<br>
				<h4>On-Demand Backup and Restore</h4>
				<hr />
				<div>You can create and restore a complete backup of your DynamoDB table data and its settings at any time.
				<a target='_blank' href='http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html'>Learn more</a>
				</div>

				<br>
				<div>
					<a class='btn btn-sm btn-primary ' on-click='create-window'>Create backup</a>
					<a class='btn btn-sm btn-default disabled' on-click='restore'>Restore backup</a>
					<a class='btn btn-sm btn-default {{#if selection_size !== 1}}disabled{{/if}}' on-click='delete'>Delete backup</a>

					<a class='btn btn-sm btn-default pull-right' on-click='refresh'><icon-refresh /></a>
				</div>

				<tabledata columns='{{columns}}' rows='{{rows}}' style='top: 180px' />



			</div>

	`,
	list_backups: function() {
		var ractive=this;
		ractive.set('rows',null);

		DynamoDB.client.listBackups( { TableName: this.get('describeTable.TableName'),} , function(err, data) {
			if (err)
				return alert('failed getting backup list')

			ractive.set('rows', data.BackupSummaries.map(function(b) {
				return [
					{ KEY: true, item: b },
					{ S: b.BackupName },
					{ S: b.BackupStatus },
					{ S: b.BackupCreationDateTime.toISOString().split('T').join(' ') },
					{ S: Math.ceil((b.BackupSizeBytes)/1024) + 'K' },
					{ S: b.BackupType },
					{ S: '' },
					{ S: b.BackupArn },
					// { N: index.IndexSizeBytes.toString() },
					// { N: index.ItemCount.toString() },

				]
			}))

		});
	},
	oninit: function() {
		var ractive=this;

		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )
			ractive.set('selection_size', ractive.get('rows').filter(function(r) { return r[0].selected === true } ).length )
		})

		ractive.on('delete', function() {
			var selected = ractive.get('rows').filter(function(r) { return r[0].selected === true } );

			if ( selected.length === 0 )
				return alert('Please select a backup to delete')

			if ( selected.length > 1 )
				return alert('Please select one backup at a time')

			var backup = ractive.get('rows').filter(function(r) { return r[0].selected === true } )[0];
			var tablename = ractive.get('describeTable.TableName')

			var backupname = backup[0].item.BackupName;

			if (confirm('Are you sure you want to delete backup ' + backupname + ' of table ' + tablename )) {

				var params = {
					BackupArn: backup[0].item.BackupArn
				};

				DynamoDB.client.deleteBackup(params, function(err, data) {
					if (err)
						return alert( err.message );

					ractive.list_backups()
				});

			}

		})

		ractive.on('create-window', function() {
			ractive.root.findComponent('WindowContainer').newWindow(function($window) {
				$window.set({
					title: 'Create Backup',
					'geometry.width': window.innerWidth * .4,
					'geometry.height': 250,
					'geometry.left': window.innerWidth * .3,
					'geometry.top': window.innerHeight * .2,
				});

				var vid = "window"+(Math.random()*0xFFFFFF<<0).toString(16)
				$window.content('<div id="' + vid + '"/>').then(function() {
					new Ractive({
						components: {

						},
						el: vid,
						template: `
							<table cellspacing="10" style="width: 100%">
								<tr>
									<td colspan=2 style="height: 40px;">
										{{#if errorMessage}}
											<span style="color:red">{{errorMessage}}</span>
										{{else}}
											<span>&nbsp;</span>
										{{/if}}
									</td>
								</tr>
								<tr>
									<td width=150>Table</td>
									<td>
										<select class="input-select" style="width: 100%">
											<option>{{describeTable.TableName}}</option>
										</select>
									</td>
								</tr>
								<tr>
									<td width=150>Backup Name</td>
									<td>
										<input type="text" class="input-text" style="width: 100%" value={{backup_name}} placeholder=" a-z, A-Z, 0-9, '.', '_', and '-' " on-keydown="resetform"/>
									</td>
								</tr>
								<tr>
									<td width=150></td>
									<td align="right">
										<a class="btn btn-sm btn-primary" on-click="create" >Create</a>
									</td>
								</tr>
							</table>
						`,
						data: {
							backup_name: '',
							describeTable: ractive.get('describeTable'),
						},
						on: {
							resetform: function() {
								this.set('errorMessage')
							},
							create: function() {
								var r = this;
								r.set('errorMessage')
								var params = {
									BackupName: this.get('backup_name'),
									TableName: this.get('describeTable.TableName')
								};
								DynamoDB.client.createBackup(params, function(err, data) {
									if (err) {
										r.set('errorMessage', err.errorMessage || err.message || 'Create Failed')
										return;
									}


									ractive.list_backups()
									$window.close()

								});

							}
						}
					})
				})
			})
		})

		this.on('refresh', function() {
			ractive.list_backups()

		})

		ractive.list_backups()
	},
	data: function() {
		return {
			columns: [ null, 'Backup name', 'Status', 'Creation time', 'Size', 'Backup type', 'Expiration date', 'Backup ARN' ],
			rows: null,
			//newindex:
		}
	}
})
