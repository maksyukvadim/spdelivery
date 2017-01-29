'use strict';

var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");
var config = require('./webpack.config');
var path = require('path');


// configuration
var compiler = webpack(config);

var server = new WebpackDevServer(compiler);
server.listen(8080, "localhost", function() {});