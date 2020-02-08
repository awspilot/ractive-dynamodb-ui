
import itemadd from '../../item/add';

export default function() {
	var ractive=this;




	var describeTable = this.get('describeTable')

	var rawitem = {}


	/* add partition */
	var htype = this._hash_key_type()

	var to_add = null;
	if (htype === "S")
		to_add = {S: ""}

	if (htype === "N")
		to_add = {N: ""}

	if (htype === "B")
		to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }

	rawitem[this._hash_key_name()] = to_add;



	/* add sort */
	if ( this._range_key_name() ) {
		var rtype = this._range_key_type()
		var to_add = null;
		if (rtype === "S")
			to_add = {S: ""}

		if (rtype === "N")
			to_add = {N: ""}

		if (rtype === "B")
			to_add = {B: Uint8Array.from(atob("InsertBase64Here"), function (c) { return c.charCodeAt(0) } ) }


		rawitem[this._range_key_name()] = to_add;
	}


	//console.log(rawitem)


	ractive.root.findComponent('WindowContainer').newWindow(function($window) {
		$window.set({
			title: 'Create Item',
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
						theme={{theme}}
						describeTable={{describeTable}}
						item={{item}}
						rawitem={{rawitem}}
						window={{window}}
					/>
				`,
				data: {
					describeTable: describeTable,
					// item: {
					//
					// },
					rawitem: rawitem,
					window: $window,
					theme: $window.parent.get('theme'),
				}
			})

			$window.set({
				_editor: r,
			})

		})
	})

}
