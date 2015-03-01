var dependencies = [
	'modules/catalog/navigation/routes/catalogRoute',
	'modules/catalog/navigation/views/catalogView',
	'modules/catalog/parts/partsModel',
	'modules/catalog/parts/forks/routes/forksRoute',
	'modules/catalog/parts/forks/views/forksView',
	'modules/catalog/common/components/filtersPanel/filtersPanelComponent',
	'modules/catalog/common/components/vendorsPanel/vendorsPanelComponent'
];

define(dependencies, function(catalogRoute, catalogView, partsModel, forksRoute, forksView,
	filtersPanelComponent, vendorsPanelComponent) {

	return core = $.extend({
		CatalogView : catalogView,
		CatalogRoute : catalogRoute,
		ForksRoute : forksRoute,
		ForksView : forksView,
		VendorsPanelComponent : vendorsPanelComponent,
		FiltersPanelComponent : filtersPanelComponent

	}, partsModel);

});