const webpack  = require('webpack');
const clientConfig  = require('./webpack.client.config');

module.exports = function setupDevServer(app){
  const clientCompiler =  webpack(clientConfig);

  clientConfig.entry.app =  [
    "webpack-dev-middleware/client",
    clientConfig.entry.app
  ];
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  app.use(require('webpack-dev-middleware')(clientCompiler,{
    stats:{
          colors:true
    }
  }));
  app.use(require('webpack-hot-middleware')(clientCompiler));
}
