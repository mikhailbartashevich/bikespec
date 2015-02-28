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

App.Router.map(function() {
 	this.route('forks', { path: '/catalog/forks' });
});

App.IndexRoute = Ember.Route.extend({
  	model : function() {
    	return ['red', 'yellow', 'blue'];
	}
});

App.ForksRoute = Ember.Route.extend({

	model : function() {
    	return this.store.find('fork');
	}

});

