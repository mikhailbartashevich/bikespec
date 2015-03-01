(function(root) {
	require(['config/require-configuration'], function(configuration) {

		require.config(configuration);

		require([

			'ember', 
			'ember_data',

			'modules/index/indexModule',
			'modules/common/commonModule',
			'modules/catalog/catalogModule'

			], 

			function(Ember, DS, indexModule, commonModule, catalogModule) {

				var core = $.extend(
					{
						LOG_TRANSITIONS: true
					}, 
					indexModule, 
					commonModule, 
					catalogModule
				);

				root['Application'] = Application = Ember.Application.create(core);

				Application.ApplicationAdapter = DS.RESTAdapter.extend({
				 	namespace: 'api'
				});

				Application.Router.map(function() {
					
					this.route('catalog', { path: '/catalog' }, function() {
					    this.resource('forks', { path: '/forks' });
					 	this.resource('controls', { path: '/controls' });
					 	this.resource('gears', { path: '/gears' });
					 	this.resource('wheels', { path: '/wheels' });
					 	this.resource('breaks', { path: '/breaks' });
					 	this.resource('saddles', { path: '/saddles' });
					});
				 	
				});

			});

	});

})(this);