const base = require('./webpack.base.config.js');

const config = Object.assign({},base,{
   plugins:base.plugins || []
});

module.exports =  config;
