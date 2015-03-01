var dependencies = [
	'ember'
];

define(dependencies, function(Ember) {

	var catalogRoute = Ember.Route.extend({

		setupController : function(controller, model) {


			var vendors = [],
				mainParts = [], 
				otherParts = [];

			this.store.find('part').then(function(parts) {

				parts.forEach(function(item, index, enumerable) {
					
					if(item.get('main')) {
						mainParts.push(item);
					} else {
						otherParts.push(item);
					}

				});

				controller.set('model', {
		    		mainParts : mainParts,
		    		otherParts : otherParts,
		    		vendors : vendors
	    		});

			});
				
		}

	});

	
	return catalogRoute;

});


