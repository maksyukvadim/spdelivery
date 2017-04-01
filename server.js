'use strict';

var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");
var config = require('./webpack.config');


// configuration
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, config.devServer);
server.listen(8080, "localhost", function() {});