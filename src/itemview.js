

//var jsoneditor = require('@awspilot/ractive-dynamodb-json-editor');
import jsoneditor from '@awspilot/ractive-dynamodb-json-editor';

export default Ractive.extend({
	isolated: true,
	components: {
		jsoneditor: jsoneditor,
	},
	template:
		'\
		<jsoneditor item={{rawitem}} navigationBar="{{false}}" style="position: absolute;top: 10px;left: 10px;right: 10px;bottom: 50px;width: auto;height: auto;border: 1px solid #97b0f8" menu-style="background-color: #d5ddf6;border-bottom: 1px solid #97b0f8;color: #444;" />\
		<div style="position: absolute;left: 0px;right:10px;bottom:10px;height: 30px;box-sizing: border-box;">\
			<a class="btn btn-sm btn-primary pull-right" on-click="create-item">Save</a>\
		</div>\
		',
	data: function() {
		return {

		}
	},

	oninit: function() {
		var ractive = this
		//console.log("createItem",  )
	},
	oncomplete: function() {
		//console.log("will show rawitem", this.get('rawitem') )
		// var ractive = this;
		// var container = document.getElementById('jsoneditor');
		// var options = {
		// 	//statusBar
		// 	//mainMenuBar
		// 	history: false,
		// 	colorPicker: false,
		// 	//timestampTag
		// 	autocomplete: false,
		// 	navigationBar: false,
		// 	search: false,
		// 	enableSort: false,
		// 	sortObjectKeys: false,
		// 	enableTransform: false,
		//
		// 	mode: 'view',
		// };
		//ractive.editor = new JSONEditor(container, options);
		//ractive.editor.set(ractive.get('item'))
	}
})
