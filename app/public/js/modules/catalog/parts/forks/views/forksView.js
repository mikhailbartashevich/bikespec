var dependencies = [
	'ember',
	'bootstrap',
	'text!modules/catalog/parts/forks/templates/forks.hbs'
];

define(dependencies, function(Ember, Bootstrap, template) {

	var view = Ember.View.extend({
		template : Ember.Handlebars.compile(template)
	});

	return view;
});