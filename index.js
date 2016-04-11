'use strict';

var _ = require('lodash');
require("babel-polyfill")
var fs = require('fs')

var defaultBabelConfig = {
  presets: ['babel-preset-es2015-node5', 'babel-preset-stage-3'].map(function(p) {return require.resolve(p)}),
  plugins: ['add-module-exports']
};

module.exports = function (entry, babelCustomConfig) {
  // set babel in entry file
  babelCustomConfig = _.isPlainObject(babelCustomConfig) ? babelCustomConfig : {};
  require('babel-core/register')(_.defaultsDeep(defaultBabelConfig, babelCustomConfig))

  var current_path = process.cwd();
  var f = current_path + '/bin/www'
  if (entry){
    f = entry
  }
  var is_exist = fs.existsSync(f)
  
  if (is_exist === false) {
    return console.log('runkoa entry file is not exist, please check it');
  }
  
  require(f) // this is es7 - gets transpile
}
