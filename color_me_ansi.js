var convert = require('color-convert');

var convert_me_ansi = function(css_color)
{
	return convert.keyword.ansi16(css_color);
}

var convert_me_css = function(ansi_color)
{
	return convert.ansi16.keyword(ansi_color);
}

//TEST CASES:

//from css to ansi:
console.log(convert_me_ansi('green'));

//from ansi to css:
console.log(convert_me_css(32));