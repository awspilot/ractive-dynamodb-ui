//import tabledata from '../tabledata';

var datatable = require( '@databank/ractive-datatable' );


export default Ractive.extend({
	components: {
		//tabledata: tabledata,
		datatable: datatable,
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
					<a class='btn btn-sm btn-default {{#if selection.length !== 1}}disabled{{/if}}' on-click='restore'>Restore backup</a>
					<a class='btn btn-sm btn-default {{#if selection.length !== 1}}disabled{{/if}}' on-click='delete'>Delete backup</a>

					<a class='btn btn-sm btn-default pull-right' on-click='refresh'><icon-refresh /></a>
				</div>



				<datatable
					style="position: absolute;top: 180px;left:0px;right:0px;bottom: 0px;"
					theme={{theme}}
					columns={{columns}}
					rows={{rows}}
					checkboxes={{ true }}
					multiselect={{ false }}
					err={{err}}
				/>

			</div>

	`,
	list_backups: function() {
		var ractive=this;

		this.set('rows',null);
		this.set('err',null);
		this.findComponent('datatable').select_none()


		DynamoDB.client.listBackups( { TableName: this.get('describeTable.TableName'),} , function(err, data) {
			if (err)
				return ractive.set({rows: false, err: {errorMessage: 'Failed getting backup list'}})

			ractive.set('rows', data.BackupSummaries.map(function(b) {
				return {
					BackupName: { S: b.BackupName },
					BackupStatus: { S: b.BackupStatus },
					BackupCreationDateTime: { S: b.BackupCreationDateTime.toISOString().split('T').join(' ') },
					BackupSizeBytes: { S: Math.ceil((b.BackupSizeBytes)/1024) + 'K' },
					BackupType: { S: b.BackupType },
					Expire: { S: '' },
					BackupArn: { S: b.BackupArn },
				}
			}))

		});
	},
	on: {
		restore() {
			var ractive=this;
			var selection = ractive.get('selection')

			if ( selection.length === 0 )
				return alert('Please select a backup to restore')

			if ( selection.length > 1 )
				return alert('Please select one backup at a time')

			var backup = selection[0];
			var tablename = this.get('describeTable.TableName')

			console.log("backup", backup )

			ractive.root.findComponent('WindowContainer').newWindow(function($window) {
				$window.set({
					title: 'Restore Backup',
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
									<td width=150>Backup Name</td>
									<td>
										<select class="input-select" value={{backup_name}} style="width: 100%" disabled>
											<option value={{backup_name}}>{{backup_name}}</option>
										</select>
									</td>
								</tr>
								<tr>
									<td width=150>Table</td>
									<td>
										<input type="text" class="input-text" style="width: 100%" value={{table_name}} placeholder="New table name" />
									</td>
								</tr>

								<tr>
									<td width=150></td>
									<td align="right">
										<a class="btn btn-sm btn-primary" on-click="restore" >Restore</a>
									</td>
								</tr>
							</table>
						`,
						data: {
							backup_name: backup.BackupName.S,
							table_name: '',
						},
						on: {
							restore: function() {
								var r = this;
								r.set('errorMessage')
								var params = {
									BackupArn: backup.BackupArn.S,
									TargetTableName: r.get('table_name')
								};
								DynamoDB.client.restoreTableFromBackup(params, function(err, data) {
									if (err) {
										r.set('errorMessage', err.errorMessage || err.message || 'Restore Failed')
										return;
									}

									$window.close()

								});
							}
						}
					})
				})
			})
		},

		delete() {
			var ractive=this;
			var selection = this.get('selection')

			if ( selection.length === 0 )
				return alert('Please select a backup to delete')

			if ( selection.length > 1 )
				return alert('Please select one backup at a time')

			var backup = this.get('selection.0')

			var tablename = this.get('describeTable.TableName')

			var backupname = backup.BackupName.S;

			if (confirm('Are you sure you want to delete backup ' + backupname + ' of table ' + tablename )) {

				var params = {
					BackupArn: backup.BackupArn.S
				};

				DynamoDB.client.deleteBackup(params, function(err, data) {
					if (err)
						return alert( err.message );

					ractive.list_backups()
				});

			}
		},



		'datatable.select': function( e, selection ) {
			this.set('selection', selection )
		},
	},
	oninit: function() {
		var ractive=this;

		ractive.on('tabledata.selectrow', function(context) {
			var keypath = context.resolve()
			ractive.set(keypath + '.0.selected', !ractive.get(keypath + '.0.selected') )
			ractive.set('selection_size', ractive.get('rows').filter(function(r) { return r[0].selected === true } ).length )
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
			columns: [
				{ field: 'BackupName',             display: "Backup name",     hide: false,  },
				{ field: 'BackupStatus',           display: "Status",          hide: false,  },
				{ field: 'BackupCreationDateTime', display: "Creation time",   hide: false,  },
				{ field: 'ItemCount',              display: "Items",           hide: false,  },
				{ field: 'BackupSizeBytes',        display: "Size",            hide: false,  },
				{ field: 'BackupType',             display: "Backup type",     hide: false,  },
				{ field: 'Expire',                 display: "Expiration date", hide: false,  },
				{ field: 'BackupArn',              display: "Backup ARN",      hide: false,  },
				//{ field: 'link',    display: "Link",      hide: false, },
			],

			rows: null,
			err: null,
			selection: [],

		}
	}
})
