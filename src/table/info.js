
export default Ractive.extend({
	template: `
		<div class='tableinfo' style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow: auto;font-size: 14px;">
				<div style='padding: 30px'>
					<h3>
						Stream details
					</h3>
					<hr>

					{{#if StreamEditing}}
						<table>
							<tr>
								<td align='right' width='350'><b>View type</b></td>
								<td>
									<input type='radio' name='{{NewStreamViewType}}' value='KEYS_ONLY'>	Keys only - only the key attributes of the modified item<br>
									<input type='radio' name='{{NewStreamViewType}}' value='NEW_IMAGE'>	New image - the entire item, as it appears after it was modified<br>
									<input type='radio' name='{{NewStreamViewType}}' value='OLD_IMAGE'>	Old image - the entire item, as it appeared before it was modified<br>
									<input type='radio' name='{{NewStreamViewType}}' value='NEW_AND_OLD_IMAGES'> New and old images - both the new and the old images of the item<br>
								</td>
							</tr>
							<tr>
								<td align='right' width='350'></td>
								<td>
									<a class='btn btn-sm btn-primary' on-click='update-stream'>Enable</a>
								</td>
							</tr>
						</table>
					{{else}}
						<table style='border-collapse: separate;border-spacing: 10px;'>
							<tr>
								<td align='right' width='350'><b>Stream enabled</b></td>
								<td>
									{{#if !selfDescribeTable.StreamSpecification}}
										no
									{{else}}
										{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true }}
										yes
										{{else}}
										no
										{{/if}}
									{{/if}}
								</td>
							</tr>
							<tr>
								<td align='right' width='350'><b>View type	</b></td>
								<td>
									{{#if !selfDescribeTable.StreamSpecification}}
										-
									{{else}}
										{{selfDescribeTable.StreamSpecification.StreamViewType}}
									{{/if}}
								</td>
							</tr>
							<tr>
								<td align='right' width='350'><b>Latest stream ARN</b></td>
								<td>
									{{#if !selfDescribeTable.LatestStreamArn}}
										-
									{{else}}
										{{selfDescribeTable.LatestStreamArn}}
									{{/if}}
								</td>
							</tr>
							<tr>
								<td align='right' width='350'>
									{{#if selfDescribeTable.StreamSpecification.StreamEnabled === true}}
										<a class='btn btn-xs btn-default' on-click='disable-stream'>Disable Stream</a>
									{{else}}
										<a class='btn btn-xs btn-default' on-click='manage-stream'>Manage Stream</a>
									{{/if}}
								</td>
								<td>
								</td>
							</tr>
						</table>
					{{/if}}


					<h3>
						Table details
						<a class='btn btn-xs btn-default pull-right' on-click='refresh-table'><i class='icon zmdi zmdi-refresh'></i></a>
					</h3>
					<div style='color:red'>{{ err }}</div>
					<hr>
					<table style='border-collapse: separate;border-spacing: 10px;'>
						<tr>
							<td align='right' width='350'><b>Table ID</b></td>
							<td> {{ selfDescribeTable.TableId }}</td>
						</tr>
						<tr>
							<td align='right' width='350'><b>Table name</b></td>
							<td> {{ selfDescribeTable.TableName }}</td>
						</tr>
						<tr>
							<td align='right'><b>Primary partition key</b></td>
							<td>
								{{#selfDescribeTable.KeySchema:i}}
									{{#if .KeyType === 'HASH'}}
										{{.AttributeName}}
										{{# ~/selfDescribeTable.AttributeDefinitions }}
											{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}
												{{#if .AttributeType === 'S'}}
													( String )
												{{/if}}
												{{#if .AttributeType === 'N'}}
													( Number )
												{{/if}}
												{{#if .AttributeType === 'B'}}
													( Binary )
												{{/if}}
											{{/if}}
										{{/}}
									{{/if}}
								{{/selfDescribeTable.KeySchema}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Primary sort key</b></td>
							<td>
								{{#selfDescribeTable.KeySchema:i}}
									{{#if .KeyType === 'RANGE'}}
										{{.AttributeName}}
										{{# ~/selfDescribeTable.AttributeDefinitions }}
											{{#if .AttributeName === ~/.selfDescribeTable.KeySchema[i].AttributeName }}
												{{#if .AttributeType === 'S'}}
													( String )
												{{/if}}
												{{#if .AttributeType === 'N'}}
													( Number )
												{{/if}}
												{{#if .AttributeType === 'B'}}
													( Binary )
												{{/if}}
											{{/if}}
										{{/}}
									{{/if}}
								{{/selfDescribeTable.KeySchema}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Point-in-time recovery</b></td>
							<td></td>
						</tr>
						<tr>
							<td align='right'><b>Encryption</b></td>
							<td></td>
						</tr>
						<tr>
							<td align='right'><b>Time to live attribute</b></td>
							<td>
								{{#if TimeToLiveDescription}}
									{{#if TimeToLiveDescriptionEditing}}
										TTL attribute <input type='text' value='{{TimeToLiveDescriptionNewField}}'> <a class='btn btn-xs btn-primary' on-click='update-ttl'>Save</a>
									{{else}}
										{{#if TimeToLiveDescriptionErr}}
											Error {{TimeToLiveDescriptionErr.errorMessage}}
										{{else}}
											{{#if TimeToLiveDescription.TimeToLiveStatus === 'ENABLED'}}
											{{else}}
												{{TimeToLiveDescription.TimeToLiveStatus}}
											{{/if}}

											{{TimeToLiveDescription.AttributeName}}

											{{#if TimeToLiveDescription.TimeToLiveStatus === 'DISABLED'}}
												<a href='javascript:void(0)' on-click='manage-ttl' >Manage TTL</a>
											{{/if}}

											{{#if TimeToLiveDescription.TimeToLiveStatus === 'ENABLED'}}
												<a href='javascript:void(0)' on-click='disable-ttl' >Disable TTL</a>
											{{/if}}

										{{/if}}
									{{/if}}
								{{else}}
									Loading...
								{{/if}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Table status</b></td>
							<td>{{selfDescribeTable.TableStatus}}</td>
						</tr>
						<tr>
							<td align='right'><b>Creation date</b></td>
							<td>{{selfDescribeTable.CreationDateTime}}</td>
						</tr>
						<tr>
							<td align='right'><b>Read/write capacity mode</b></td>
							<td>
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PROVISIONED'}}Provisioned{{/if}}
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PAY_PER_REQUEST'}}On-Demand{{/if}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Provisioned read capacity units</b></td>
							<td>
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PROVISIONED'}}
									{{selfDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}
								{{/if}}
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PAY_PER_REQUEST'}}-{{/if}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Provisioned write capacity units</b></td>
							<td>
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PROVISIONED'}}
									{{selfDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}
								{{/if}}
								{{#if selfDescribeTable.BillingModeSummary.BillingMode === 'PAY_PER_REQUEST'}}-{{/if}}
							</td>
						</tr>
						<tr>
							<td align='right'><b>Last decrease time</b></td>
							<td>{{selfDescribeTable.ProvisionedThroughput.LastDecreaseDateTime || '-' }}</td>
						</tr>
						<tr>
							<td align='right'><b>Last increase time</b></td>
							<td>{{selfDescribeTable.ProvisionedThroughput.LastIncreaseDateTime || '-'}}</td>
						</tr>
						<tr>
							<td align='right'><b>Storage size (in bytes)</b></td>
							<td>{{selfDescribeTable.TableSizeBytes }}</td>
						</tr>
						<tr>
							<td align='right'><b>Item count</b></td>
							<td>{{ selfDescribeTable.ItemCount }}</td>
						</tr>
						<tr>
							<td align='right'><b>Region</b></td>
							<td></td>
						</tr>
						<tr>
							<td align='right'><b>Amazon Resource Name (ARN)</b></td>
							<td> {{selfDescribeTable.TableArn}}</td>
						</tr>
					</table>
					<small>Storage size and item count are not updated in real-time. They are updated periodically, roughly every six hours.</small>
				</div>
		</div>
	`,

	refresh_table: function() {
		var ractive=this;

		ractive.set('selfDescribeTable')
		ractive.set('TimeToLiveDescriptionEditing')
		ractive.set('TimeToLiveDescription')
		ractive.set('TimeToLiveDescriptionErr')
		ractive.set('TimeToLiveDescriptionNewField','')
		ractive.set('StreamEditing')


		async.waterfall([
			function( cb ) {

				DynamoDB.client.describeTable( { TableName: ractive.get('table.name') }, function(err, data) {
					if (err)
						return cb(err);

					ractive.set('selfDescribeTable', data.Table)
					cb()
				})
			},

			function( cb ) {
				DynamoDB.client.describeTimeToLive( { TableName: ractive.get('table.name')} , function(err, data) {
					if (err)
						return ractive.set('TimeToLiveDescriptionErr', err )

					ractive.set('TimeToLiveDescription', data.TimeToLiveDescription )
					cb()
				})
			},

		], function(err) {
			if (err)
				ractive.set('err', err.errorMessage )

		})


	},
	data: function() {
		return {
			selfDescribeTable: null,
		}
	},
	oninit: function() {
		var ractive = this;

		ractive.set('selfDescribeTable', ractive.get('describeTable'))

		ractive.on('manage-ttl', function() {
			ractive.set('TimeToLiveDescriptionEditing', true )
			return false;
		})

		ractive.on('update-ttl', function() {
			var newfield = ractive.get('TimeToLiveDescriptionNewField').trim()
			if (!newfield)
				return alert('invalid field name')

			var params = {
				TableName: ractive.get('table.name'),
				TimeToLiveSpecification: {
					AttributeName: newfield,
					Enabled: true,
				}
			};
			DynamoDB.client.updateTimeToLive( params , function(err, data) {
				if (err)
					return alert('failed ' + err.errorMessage )

				ractive.refresh_table()

			})


		})
		ractive.on('disable-ttl', function() {
			if (confirm('Are you sure you want to disable TTL ?')) {
				var params = {
					TableName: ractive.get('table.name'),
					TimeToLiveSpecification: {
						AttributeName: ractive.get('TimeToLiveDescription.AttributeName'),
						Enabled: false,
					}
				};
				DynamoDB.client.updateTimeToLive( params , function(err, data) {
					if (err)
						return alert('failed ' + err.errorMessage )

					ractive.refresh_table()

				})
			}
		})


		ractive.on('manage-stream', function() {
			ractive.set('StreamEditing', true )
		})
		ractive.on('update-stream', function() {
			var type = ractive.get('NewStreamViewType' )
			DynamoDB.client.updateTable({
				TableName: ractive.get('table.name'),
				StreamSpecification: {
					StreamEnabled: true,
					StreamViewType: type
				}
			}, function(err, data) {
				if (err)
					return alert('Failed ' + err.errorMessage);

					ractive.refresh_table()
				cb()
			})
		})
		ractive.on('disable-stream', function() {
			if (confirm('Disable stream ?')) {
				DynamoDB.client.updateTable({
					TableName: ractive.get('table.name'),
					StreamSpecification: {
						StreamEnabled: false,
					}
				}, function(err, data) {
					if (err)
						return alert('Failed ' + err.errorMessage);

						ractive.refresh_table()
					cb()
				})

			}
		})

		ractive.on('refresh-table', function() {
			ractive.refresh_table()
		})
		ractive.refresh_table()

	},
})
