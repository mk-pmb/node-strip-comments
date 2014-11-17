'use strict';

var foo = function() {};

var bar = function() {};


var baz = function() {


  var some = true;

  var fafa = true;

  var but = 'not';
};



var fun = false;

var path = '/path/to/*/something/that/not/be/stripped.js';

var globstar = '/path/to/globstar/not/be/stripped/**/*.js';

var testStrings = (function () {
  return console.dir({
    str0: 'hello world',
  });
}());

var testRegexps = (function () {
  return console.dir({
    regexp0: /hello world/,
  });
}());
