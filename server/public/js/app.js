App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
 	namespace: 'api'
});

App.Fork = DS.Model.extend({
    vendor      : DS.attr('number'),
    name        : DS.attr('string'),
    modelName   : DS.attr('string'),
    year        : DS.attr('number')
});

App.Part = DS.Model.extend({
    name        : DS.attr('string'),
    route 		: DS.attr('string'),
    main 		: DS.attr('number'),
    year        : DS.attr('number')
});

App.Vendor = DS.Model.extend({
    name        : DS.attr('string')
});

App.Router.map(function() {
	this.route('catalog', { path: '/catalog' }, function() {
	    this.resource('forks', { path: '/forks' });
	 	this.resource('controls', { path: '/controls' });
	 	this.resource('gears', { path: '/gears' });
	 	this.resource('wheels', { path: '/wheels' });
	 	this.resource('breaks', { path: '/breaks' });
	 	this.resource('saddles', { path: '/saddles' });
	});
 	
});

App.IndexRoute = Ember.Route.extend({
  	model : function() {
    	return [];
	}
});

App.CatalogRoute = Ember.Route.extend({

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

App.ForksRoute = Ember.Route.extend({

	model : function() {
    	return this.store.find('fork');
	}

});


App.FiltersPanelController = Ember.Controller.extend({


});


App.FiltersPanelComponent = Ember.Component.extend({

	controller : App.FiltersPanelController.create(),

	didInsertElement : function() {

		var that = this;

		$.get('/api/vendors', function() {
			}).done(function(vendors) {

			that.set('model', vendors);

		});

	}

});

App.VendorsPanelComponent = Ember.Component.extend({

	controller : App.FiltersPanelController.create(),

	didInsertElement : function() {

		var that = this;
		
		$.get('/api/vendors', function() {
			}).done(function(vendors) {

			that.set('model', vendors);

		});

	}

});


