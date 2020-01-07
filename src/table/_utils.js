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

export default {
	_hash_key_name: _hash_key_name,
	_hash_key_type: _hash_key_type,
	_hash_key_type_name: _hash_key_type_name,

	_range_key_name: _range_key_name,
	_range_key_type: _range_key_type,
}
