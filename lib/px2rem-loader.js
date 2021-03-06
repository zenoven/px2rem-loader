var loaderUtils = require('loader-utils')
var Px2rem = require('px2rem-reloaded')

module.exports = function (source) {
  this.cacheable();
  var query = loaderUtils.parseQuery(this.query)
  var px2remIns = new Px2rem(query)
  return px2remIns.generateRem(source);
}
