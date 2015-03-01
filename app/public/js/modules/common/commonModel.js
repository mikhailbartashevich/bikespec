
var dependencies = [
	'ember', 'ember_data'
];

define(dependencies, function(model, DS) {

	var commonModelFields = Ember.Mixin.create({

		name : DS.attr('string')

	});
	
	return commonModelFields;

});



