

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
import jsoneditor from '@awspilot/ractive-dynamodb-json-editor';
import _table_utils from '../table/_utils';


export default Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: jsoneditor,
	},
	template:
		`
		<jsoneditor
			theme={{theme}}
			item={{itemtoedit}}
			navigationBar={{false}}
			style="position: absolute;top: -1px;left: -1px;right: -1px;bottom: 50px;width: auto;height: auto;"
			menu-style=""
		/>
		<div style="position: absolute;left: 10px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">
			<span style="color: red;line-height: 30px;">{{errorMessage}}</span>
			<a class="btn btn-sm btn-primary pull-right" style="color: #fff;background-color: #337ab7;border-color: #2e6da4;float: right;padding: 5px 10px; font-size: 12px; line-height: 1.5;border-radius: 3px;font-family: sans-serif;"  on-click="update-item">Save</a>
		</div>
		`,
	data: function() {
		return {
			itemtoedit: {}
		}
	},
	_hash_key_name: function() {
		return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'HASH'})[0] || {}).AttributeName
	},
	_range_key_name: function() {
		return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName;
	},
	oninit: function() {
		var ractive = this

		// we do not really need to clone new item
		this.set({itemtoedit: this.get('rawitem')  })

		this.observe('itemtoedit', function(n,o,kp) {
			this.set({errorMessage: ''})
		})


		//var rawitem = this.get('rawitem')
		//this.set({itemtoedit: { ...rawitem }  })

		//var debug = this.get('itemtoedit');

		this.on('update-item', function() {
			//console.log("table=","HASH=", this._hash_key_name(), " RANGE=", this._range_key_name() )

			var originalitem = this.get('rawitem')
			var updateditem = _table_utils._clone_deep(this.get('itemtoedit'))

			var updateItemCall = {
				TableName: this.get('describeTable.TableName'),
				Key: {},
				AttributeUpdates: {}
			}

			if ( !updateditem.hasOwnProperty( this._hash_key_name() ) )
				return alert('Missing PARTITION_KEY ' + this._hash_key_name() )

			if ( this._range_key_name() && (!updateditem.hasOwnProperty( this._range_key_name() )) )
				return alert('Missing SORT_KEY ' + this._range_key_name() )


			updateItemCall.Key[this._hash_key_name()] = updateditem[this._hash_key_name()]
			delete updateditem[this._hash_key_name()]

			if ( this._range_key_name() ) {
				updateItemCall.Key[this._range_key_name()] = updateditem[this._range_key_name()]
				delete updateditem[this._range_key_name()]
			}

			Object.keys(updateditem).map(function( k ) {
				updateItemCall.AttributeUpdates[k] = {
					Action: 'PUT', //
					Value: updateditem[k],
				}
			})

			DynamoDB.client.updateItem(updateItemCall, function(err,data) {
				if (err)
					return ractive.set('errorMessage', err.message)

				ractive.get('window').close()
			})
		})

	},

})
