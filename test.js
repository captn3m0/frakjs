var assert = require('assert');
var frak = require('./index');
var strings = ["foo", "bar", "baz", "quux"];

var pattern = frak.pattern(strings, {"exact?": true})
assert(pattern.toString() === '/^(?:foo|ba[rz]|quux)$/');