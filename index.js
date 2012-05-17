module.exports.parse = require('./lib/parse').parse;
module.exports.match = require('./lib/interp').match;
module.exports.construct = require('./lib/constructor').construct;
module.exports.compile = require('./lib/compile').compile;
module.exports.constructor = function(pstr) {
  var pattern = exports.parse(pstr);
  return function(vars) {
    return exports.construct(pattern, vars);
  };
};
