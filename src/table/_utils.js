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
},

export default {
	_hash_key_name: _hash_key_name,
	_hash_key_type: _hash_key_type,
}
