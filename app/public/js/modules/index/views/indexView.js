var dependencies = [
	"ember",
	"text!modules/index/templates/index.hbs",
];

define(dependencies, function(Ember, template) {

	var view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(template)
	});

	return view;
});