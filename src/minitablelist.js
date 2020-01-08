import svgicons from './svgicons'

export default Ractive.extend({
	//isolated: true,
	template:
		`
		<miniheader>
			Tables
			<div class='pull-right' style='margin-right: 2px;'>
				<a class='btn btn-xs btn-default' on-click='create'>
					<icon-plus />
				</a>
				<a class='btn btn-xs btn-default' on-click='@this.refresh_tables()'>
					<icon-refresh />
				</a>
			</div>
		</miniheader>
		<scrollarea class='scrollarea miniheaderbody' style='position: absolute;'>
		<tables>
			{{#tables}}
			<div on-click='@this.fire( "open-table",.)'> {{.}} </div>
			{{/tables}}
		</tables>
		</scrollarea>
		`,
	data: function() { return {} },
	refresh_tables: function() {
		var ractive = this

		ractive.set('tables')

		DynamoDB.query('SHOW TABLES', function(err, data ) {

				if (err)
					return ractive.set('err', err )

				ractive.set('err')
				ractive.set('tables', data )

		})
	},
	oninit: function() {
		this.refresh_tables()
		var ractive = this
		ractive.on('open-table', function(e, table ) {
			ractive.parent.fire('open-table', table )
		})
		ractive.on('create', function() {
			ractive.root.findComponent('tabs').newtab('tablecreate', 'Create Table' )
		})
	},
})
