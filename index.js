var ranges = [
  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
  '\ud83d[\ude80-\udeff]', // U+1F680 to U+1F6FF
  '\ud7c9[\ude00-\udeff]'  // U+2702 to U+27B0
];

var re = new RegExp(ranges.join('|'), 'g');

function escape(name) {
  return "_ʕ" + name.codePointAt(0) + "ʔ_";
}
module.exports = function(source) {
	this.cacheable();
	return source.replace(re, escape);
};
