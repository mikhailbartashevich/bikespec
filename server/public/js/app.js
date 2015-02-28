App = Ember.Application.create();

App.ApplicationAdapter = DS.RESTAdapter.extend({
 	namespace: 'api'
});

App.Fork = DS.Model.extend({
    vendor      : DS.attr('string'),
    name        : DS.attr('string'),
    modelName   : DS.attr('string'),
    year        : DS.attr('number')
});

App.Part = DS.Model.extend({
    name        : DS.attr('string'),
    route 		: DS.attr('string'),
    year        : DS.attr('number')
});

App.Router.map(function() {
	this.route('catalog', { path: '/catalog' }, function() {
	    this.resource('forks', { path: '/forks' });
	 	this.resource('controls', { path: '/controls' });
	 	this.resource('gears', { path: '/gears' });
	 	this.resource('wheels', { path: '/wheels' });
	 	this.resource('breaks', { path: '/breaks' });
	});
 	
});

App.IndexRoute = Ember.Route.extend({
  	model : function() {
    	return [];
	}
});

App.CatalogRoute = Ember.Route.extend({

	model : function() {
    	return this.store.find('part');
	}

});

App.ForksRoute = Ember.Route.extend({

	model : function() {
    	return this.store.find('fork');
	}

});

