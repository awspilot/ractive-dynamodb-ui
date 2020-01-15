var _hash_key_name = function() {
	return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'HASH'})[0] || {}).AttributeName
}

var _hash_key_type = function() {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._hash_key_name() )
			ret = at.AttributeType
	})
	return ret;
}

var _hash_key_type_name = function() {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._hash_key_type() ]
}

var _range_key_name = function() {
	return (this.get('describeTable').KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName;
}

var _range_key_type = function() {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._range_key_name() )
			ret = at.AttributeType
	})
	return ret;
}

var _range_key_type_name = function() {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._range_key_type() ]
}

var _gsi_hash_key_name = function( indexname ) {

	var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function(i) {return i.IndexName === indexname})[0];
	if (! index )
		return;

	return (index.KeySchema.filter(function(k) { return k.KeyType === 'HASH'})[0] || {}).AttributeName

}

var _gsi_hash_key_type = function( indexname ) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._gsi_hash_key_name( indexname ) )
			ret = at.AttributeType
	})
	return ret;
}

var _gsi_hash_key_type_name = function( indexname ) {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._gsi_hash_key_type( indexname ) ]
}

var _gsi_range_key_name = function( indexname ) {

	var index = (this.get('describeTable.GlobalSecondaryIndexes') || []).filter(function(i) {return i.IndexName === indexname})[0];
	if (! index )
		return;

	return (index.KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName

}

var _gsi_range_key_type = function( indexname ) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._gsi_range_key_name( indexname ) )
			ret = at.AttributeType
	})
	return ret;
}

var _gsi_range_key_type_name = function( indexname ) {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._gsi_range_key_type( indexname ) ]
}

var _lsi_hash_key_name = function( indexname ) {

	var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function(i) {return i.IndexName === indexname})[0];
	if (! index )
		return;

	return (index.KeySchema.filter(function(k) { return k.KeyType === 'HASH'})[0] || {}).AttributeName

}

var _lsi_hash_key_type = function( indexname ) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._lsi_hash_key_name( indexname ) )
			ret = at.AttributeType
	})
	return ret;
}

var _lsi_hash_key_type_name = function( indexname ) {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._lsi_hash_key_type( indexname ) ]
}

var _lsi_range_key_name = function( indexname ) {

	var index = (this.get('describeTable.LocalSecondaryIndexes') || []).filter(function(i) {return i.IndexName === indexname})[0];
	if (! index )
		return;

	return (index.KeySchema.filter(function(k) { return k.KeyType === 'RANGE'})[0] || {}).AttributeName

}

var _lsi_range_key_type = function( indexname ) {
	var ractive = this;

	var ret;
	this.get('describeTable.AttributeDefinitions').map(function( at ) {
		if ( at.AttributeName === ractive._lsi_range_key_name( indexname ) )
			ret = at.AttributeType
	})
	return ret;
}


var _lsi_range_key_type_name = function( indexname ) {
	return ({S: 'String', N: 'Number', 'B': 'Binary'})[ this._lsi_range_key_type( indexname ) ]
}



var _clone_deep = function( o ) {

	if (
		(typeof o === "string") ||
		(typeof o === "number") ||
		(typeof o === "boolean") ||
		(o === null)
	)
		return JSON.parse(JSON.stringify(o))

	if (o instanceof Uint8Array) {
		var clone = new Uint8Array( o.length )
		for (var i = 0; i < o.length; i++) clone[i] = o[i];
		return clone;
	}

	if (typeof o === "object") {
		if(Array.isArray(o) ) { // array
			var clone = []
			o.map(function( v,k, arr ) {
				clone[k] = _clone_deep(v)
			})
			return clone;
		} else if ( o instanceof Set) {
			var clone = new Set()
			for (var i of o) clone.add(_clone_deep(i))
			return clone;
		} else { // object
			var clone = {};
			Object.keys(o).map(function(k) {
				clone[k] = _clone_deep(o[k])
			})
			return clone;
		}
	}
}

export default {
	_hash_key_name: _hash_key_name,
	_hash_key_type: _hash_key_type,
	_hash_key_type_name: _hash_key_type_name,

	_range_key_name: _range_key_name,
	_range_key_type: _range_key_type,
	_range_key_type_name: _range_key_type_name,

	_gsi_hash_key_name: _gsi_hash_key_name,
	_gsi_hash_key_type: _gsi_hash_key_type,
	_gsi_hash_key_type_name: _gsi_hash_key_type_name,

	_gsi_range_key_name: _gsi_range_key_name,
	_gsi_range_key_type: _gsi_range_key_type,
	_gsi_range_key_type_name: _gsi_range_key_type_name,

	_lsi_hash_key_name: _lsi_hash_key_name,
	_lsi_hash_key_type: _lsi_hash_key_type,
	_lsi_hash_key_type_name: _lsi_hash_key_type_name,

	_lsi_range_key_name: _lsi_range_key_name,
	_lsi_range_key_type: _lsi_range_key_type,
	_lsi_range_key_type_name: _lsi_range_key_type_name,


	_clone_deep: _clone_deep,
}
