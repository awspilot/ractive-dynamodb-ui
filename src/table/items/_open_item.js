
import itemedit from '../../item/edit';

export default function( e, col, item, rawitem ) {
	var ractive=this;
	var describeTable = this.get('describeTable')
	var hash  = this._hash_key_name()
	var range = this._range_key_name()
	//console.log("open-item", "table=",describeTable.TableName, "hash=",hash, "range=", range, "item=", item, rawitem  )
	ractive.root.findComponent('WindowContainer').newWindow(function($window) {
		$window.set({
			title: 'Edit Item',
			'geometry.width': window.innerWidth * .6,
			'geometry.height': window.innerHeight * .6,
			'geometry.left': window.innerWidth * .2,
			'geometry.top': window.innerHeight * .2,
		});

		var vid = "window"+(Math.random()*0xFFFFFF<<0).toString(16)
		$window.content('<div id="' + vid + '"/>').then(function() {
			new Ractive({
				components: {
					itemedit: itemedit,
				},
				el: vid,
				template: '<itemedit describeTable="{{describeTable}}" item="{{item}}" rawitem="{{rawitem}}" window={{window}} />',
				data: {
					describeTable: describeTable,
					//item: item,
					rawitem: rawitem,
					window: $window,
				}
			})
		})

	})
}
