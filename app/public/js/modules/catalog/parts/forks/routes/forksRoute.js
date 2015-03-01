var dependencies = [
	'ember'
];

define(dependencies, function(Ember) {

	var forksRoute = Ember.Route.extend({

		model : function() {
	    	return this.store.find('fork');
		}

	});

	return forksRoute;

});