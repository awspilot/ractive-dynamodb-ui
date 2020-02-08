
import itemadd from '../../item/add';

export default function( raw ) {
	var ractive=this;




	var describeTable = this.get('describeTable')

	var rawitem = raw

	ractive.root.findComponent('WindowContainer').newWindow(function($window) {
		$window.set({
			title: 'Duplicate Item',
			'geometry.width': window.innerWidth * .6,
			'geometry.height': window.innerHeight * .6,
			'geometry.left': window.innerWidth * .2,
			'geometry.top': window.innerHeight * .2,
		});

		var vid = "window"+(Math.random()*0xFFFFFF<<0).toString(16)
		$window.content('<div id="' + vid + '"/>').then(function() {
			var r = new Ractive({
				components: {
					itemadd:  itemadd,
				},
				el: vid,
				template: `
					<itemadd
						describeTable={{describeTable}}
						item={{item}}
						rawitem={{rawitem}}
						window={{window}}
					/>`,
				data: {
					describeTable: describeTable,
					// item: {
					//
					// },
					rawitem: rawitem,
					window: $window,
				}
			})
		})
	})

}
