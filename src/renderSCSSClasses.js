function redner(options) {
	var iconlib_prefix = 'ico-';
	// var iconlib_prefix = '#{$code-app}-icon-';
	var iconlib_classes = [
		'@import "' + options.fontName + '_fontface";',
		'@import "' + options.fontName + '_vars";',
		'',
		'[class^="' + iconlib_prefix + '"], [class*=" ' + iconlib_prefix + '"] {',
		'	font-family: "' + options.fontName + '";',
		'	speak: none;',
		'	font-style: normal;',
		'	font-weight: normal;',
		'	font-variant: normal;',
		'	text-transform: none;',
		'	line-height: 1;',
		'',
		'	/* Better Font Rendering =========== */',
		'	-webkit-font-smoothing: antialiased;',
		'	-moz-osx-font-smoothing: grayscale;',
		'}',
		''
	];

	Object.keys(options.codepoints).forEach(function (part) {
		iconlib_classes.push('.' + iconlib_prefix + part + ':before {');
		iconlib_classes.push('	content: $' + options.fontName + '-' + part + ';');
		iconlib_classes.push('}');
	});
	return iconlib_classes.join('\n');
}

module.exports = render;