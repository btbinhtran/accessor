
/**
 * Expose `get`.
 */

exports = module.exports = get;

/**
 * Get [nested] property from `obj`.
 *
 * @param {Mixed} obj
 * @param {String} path Dot separated string.
 * @return {Mixed}
 */

function get(obj, path) {
  path = path.split('.');
  var val = findAttr(this, path.shift());

  // XXX: refactor to more generic/better system.
  while (path.length && undefined !== val) {
    var name = path.shift();
    if (val.hasOwnProperty(name)) {
      val = val[name];
    // XXX: unoptimized, but should work for the moment.
    } else if ('function' === typeof val.get) {
      val = val.get([name].concat(path).join('.'));
      path = [];
    } else {
      val = undefined;
    }
  }

  return val;
}

/**
 * Push additional check for attribute.
 */

exports.use = function(fn){

}