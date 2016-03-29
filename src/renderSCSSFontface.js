var fs = require('fs');

function render(options, type, filepath){
	var iconlib_fontface = [];
	var buffer = fs.readFileSync(filepath, {encoding: 'utf8'});
	var url = 'data:application/x-font-' + type + ';charset=utf-8;base64,' + buffer.toString('base64');
	var css = [
		'@font-face {',
		'	font-family: ' + JSON.stringify(options.fontName) + ';',
		'	src: url("' + url + '") format("' + type + '");',
		'	font-weight: normal;',
			'	font-style: normal;',
		'}',
		''
	];
	return iconlib_fontface.join('\n');
}

module.exports = render;