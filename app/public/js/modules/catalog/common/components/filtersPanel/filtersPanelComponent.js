var dependencies = [
	'ember', 'jquery',
	'text!modules/catalog/common/components/filtersPanel/templates/filtersPanel.hbs'
];

define(dependencies, function(Ember, $, template) {

	var filtersPanelComponent = Ember.Component.extend({

		template: Ember.Handlebars.compile(template),

		didInsertElement : function() {

			var that = this;

			$.get('/api/vendors', function() {
				}).done(function(vendors) {

				that.set('model', vendors);

			});

		}

	});

	return filtersPanelComponent;

});


