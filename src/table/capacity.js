
export default Ractive.extend({
	template: `

			<div style='padding: 30px'>



				<h3 style="font-size: 16px;">Read/write capacity mode</h3>
				<hr/>
				<p style="font-size: 13px;">
					Select on-demand if you want to pay only for the read and writes you perform, with no capacity planning required. Select provisioned to save on throughput costs if you can reliably estimate your application's throughput requirements. See the
						<a href="http://aws.amazon.com/dynamodb/pricing">DynamoDB pricing page</a> and
						<a href="DynamoDB Developer Guide">DynamoDB Developer Guide</a> to learn more.
				</p>
				Read/write capacity mode can be changed later.<br>
				<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PROVISIONED"> Provisioned (free-tier eligible)<br>
				<input class="input-radio" type="radio" name={{localDescribeTable.BillingModeSummary.BillingMode}} value="PAY_PER_REQUEST">On-demand<br>

				<h3>
					Provisioned capacity
					<a class='btn btn-sm btn-default pull-right' on-click='refresh-table'><icon-refresh /></a>
				</h3>
				<hr>

					{{#if localDescribeTable === false}}
						Loading...
					{{else}}
						{{#if localDescribeTable.BillingModeSummary.BillingMode === 'PAY_PER_REQUEST'}}
							Not applicable because read/write capacity mode is on-demand.<br>
						{{else}}
							<table>
								<tr>
									<td width='160' align='right'></td>
									<td width='160'>Read capacity units</td>
									<td width='160'>Write capacity units</td>
								</tr>
								<tr>
									<td>Table</td>
									<td><input class="input-text" type='text' size='4' value='{{localDescribeTable.ProvisionedThroughput.ReadCapacityUnits}}' on-focus='focus' /></td>
									<td><input class="input-text" type='text' size='4' value='{{localDescribeTable.ProvisionedThroughput.WriteCapacityUnits}}' on-focus='focus' /></td>
								</tr>
								{{#localDescribeTable.GlobalSecondaryIndexes}}
								<tr>
									<td>{{ .IndexName }}</td>
									<td><input class="input-text" type='text' size='4' value='{{.ProvisionedThroughput.ReadCapacityUnits}}' on-focus='focus' /></td>
									<td><input class="input-text" type='text' size='4' value='{{.ProvisionedThroughput.WriteCapacityUnits}}' on-focus='focus' /></td>
								</tr>
								{{/localDescribeTable.GlobalSecondaryIndexes}}
							</table>
						{{/if}}
					{{/if}}
				<h3>Auto Scaling</h3>
				<hr/>
					<small>Auto Scaling not supported by this UI</small>
					<br>
					<div style='color:red'>{{ err }}&nbsp;</div>
					<table>
						<tr>
							<td width='160'>
							<td>
								<a class='btn btn-md btn-primary' on-click='save'>Save</a>
								<a class='btn btn-md btn-default' on-click='cancel'>Cancel</a>
							</td>
						</tr>
					</table>
			</div>

	`,
	oninit: function() {
		var ractive = this;
		var refresh_table = function() {
			ractive.set('localDescribeTable', false )
			DynamoDB.client.describeTable( { TableName: ractive.get('table.name') }, function(err, data) {
				if (err)
					return ractive.set('err', err.message );

				console.log(data.Table)
				ractive.set('localDescribeTable', data.Table)
				ractive.set('originalDescribeTable', JSON.parse(JSON.stringify( data.Table ))) // this wont change
			})
		}
		ractive.on('cancel', function() {
			refresh_table()
		})
		ractive.on('focus', function() {
			ractive.set( 'err' )
		})


		ractive.on('save', function() {

			var payload = {
				TableName: ractive.get('describeTable.TableName')
			};

			// if main table provisioned troughput changed but BillingMode remain the same
			if (
				(
					(ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits')  !== ractive.get('originalDescribeTable.ProvisionedThroughput.ReadCapacityUnits') ) ||
					(ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') !== ractive.get('originalDescribeTable.ProvisionedThroughput.WriteCapacityUnits') )
				) && (
					(ractive.get('localDescribeTable.BillingModeSummary.BillingMode')  === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode') )
				)
			) {
				payload.ProvisionedThroughput = {
					ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits'),
					WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits'),
				}
			} else {
				// if no changes, do not add obj at all
				//payload.ProvisionedThroughput = { ... }
			}





			// each index
			if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
				payload.GlobalSecondaryIndexUpdates = []
				ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function(gsi, i ) {
					var original_gsi = ractive.get('originalDescribeTable.GlobalSecondaryIndexes.'+i )


					// if index provisioned troughput changed but BillingMode remain the same
					if (
						(
							(gsi.ProvisionedThroughput.ReadCapacityUnits  !==  ractive.get('originalDescribeTable.GlobalSecondaryIndexes.'+i+'.ProvisionedThroughput.ReadCapacityUnits' ) ) ||
							(gsi.ProvisionedThroughput.WriteCapacityUnits !==  ractive.get('originalDescribeTable.GlobalSecondaryIndexes.'+i+'.ProvisionedThroughput.WriteCapacityUnits') )
						) && (
							(ractive.get('localDescribeTable.BillingModeSummary.BillingMode')  === ractive.get('originalDescribeTable.BillingModeSummary.BillingMode') )
						)
					) {
						payload.GlobalSecondaryIndexUpdates.push({
							Update: {
								IndexName: gsi.IndexName,
								ProvisionedThroughput: {
									ReadCapacityUnits:  gsi.ProvisionedThroughput.ReadCapacityUnits,
									WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits,
								}
							}
						})
					}
				})
			}

			if ( (payload.GlobalSecondaryIndexUpdates || []).length === 0 )
				delete payload.GlobalSecondaryIndexUpdates;


			// if BillingMode has changed
			if (ractive.get('localDescribeTable.BillingModeSummary.BillingMode')  !== ractive.get('originalDescribeTable.BillingModeSummary.BillingMode')) {
				if ( ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PAY_PER_REQUEST') {
					payload.BillingMode = 'PAY_PER_REQUEST';
				}

				if ( ractive.get('localDescribeTable.BillingModeSummary.BillingMode') === 'PROVISIONED') {
					payload.BillingMode = 'PROVISIONED';
					payload.ProvisionedThroughput = {
						ReadCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.ReadCapacityUnits') || 1,
						WriteCapacityUnits: ractive.get('localDescribeTable.ProvisionedThroughput.WriteCapacityUnits') || 1,
					}
					// each index
					if ((ractive.get('localDescribeTable.GlobalSecondaryIndexes') || []).length) {
						payload.GlobalSecondaryIndexUpdates = []
						ractive.get('localDescribeTable.GlobalSecondaryIndexes').map(function(gsi, i ) {

							payload.GlobalSecondaryIndexUpdates.push({
								Update: {
									IndexName: gsi.IndexName,
									ProvisionedThroughput: {
										ReadCapacityUnits:  gsi.ProvisionedThroughput.ReadCapacityUnits || 1,
										WriteCapacityUnits: gsi.ProvisionedThroughput.WriteCapacityUnits || 1,
									}
								}
							})

						})
					}
				}



			}



			//console.log('payload', payload )

			DynamoDB.client.updateTable( payload , function(err, data) {
				if (err)
					return ractive.set('err', err.message );



			 	setTimeout(refresh_table,1000)
				//console.log( err, data )
			})
		})
		ractive.on('refresh-table', function() {
			refresh_table()
		})
		refresh_table()

	},
})
