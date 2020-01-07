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

}
