function render(options){
	var iconlib_vars = [];

	Object.keys(options.codepoints).forEach(function (part) {
		iconlib_vars.push('$' + options.fontName + '-' + part + ': "\\' + options.codepoints[part].toString(16) + '";');
	});
	return iconlib_vars.join('\n');
}

module.exports = render;