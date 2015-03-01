var dependencies = [
	'ember_data',
	'modules/common/commonModel'
];

define(dependencies, function(DS, commonModelFields) {

	var fork = DS.Model.extend(commonModelFields, {
	    vendor      : DS.attr('number'),
	    modelName   : DS.attr('string'),
	    year        : DS.attr('number')
	});

	var part = DS.Model.extend(commonModelFields, {
	    route 		: DS.attr('string'),
	    main 		: DS.attr('number'),
	    year        : DS.attr('number')
	});

	var vendor = DS.Model.extend(commonModelFields, {});

	return {
		Fork : fork,
		Part : part,
		Vendor : vendor
	};

});



