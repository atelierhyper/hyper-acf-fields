(function($, undefined) {
	var Field = acf.models.SelectField.extend({
		type: 'hyper_post_object',
	});

	acf.registerFieldType( Field );

	// var SelectionGreaterThan = GreaterThan.extend({
	// 	type: 'selectionGreaterThan',
	// 	label: __('Selection is greater than'),
	// 	fieldTypes: [ 'hyper_post_object' ],
	// });
	//
	// acf.registerConditionType( SelectionGreaterThan );
	//
	// var SelectionLessThan = LessThan.extend({
	// 	type: 'selectionLessThan',
	// 	label: __('Selection is less than'),
	// 	fieldTypes: [ 'hyper_post_object' ],
	// });
	//
	// acf.registerConditionType( SelectionLessThan );

	// var HasValue = acf.Condition.extend({
	// 	type: 'hasValue',
	// 	operator: '!=empty',
	// 	label: __('Has any value'),
	// 	fieldTypes: [ 'hyper_post_object' ],
	// 	match: function( rule, field ){
	// 		return (field.val() ? true : false);
	// 	},
	// 	choices: function( fieldObject ){
	// 		return '<input type="text" disabled="" />';
	// 	}
	// });
	//
	// acf.registerConditionType( HasValue );
})(jQuery);
