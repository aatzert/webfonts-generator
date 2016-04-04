var fs = require('fs');

function render(options, type, content){
	var buffer = new Buffer(content);
	var url = 'data:application/x-font-' + type + ';charset=utf-8;base64,' + buffer.toString('base64');
	var css = [
		'@font-face {',
		'	font-family: ' + JSON.stringify(options.fontName) + ';',
		'	src: url("' + url + '") format("' + type + '");',
		'	font-weight: normal;',
			'	font-style: normal;',
		'}'
	];
	return css.join('\n');
}

module.exports = render;