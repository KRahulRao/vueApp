// var express = require('express');

import express from 'express';
import fs from 'fs';
import path from 'path';

let app = express();

const port = process.env.PORT || 4000;

const indexHtml = (()=>{
 return fs.readFileSync(path.resolve(__dirname , './index.html'),"utf-8");
})();

app.use('/dist',express.static(path.resolve(__dirname,'./dist')));

require('./build/webpack.dev.config')(app);

app.get('*', (req,res) => {
  res.write(indexHtml);
  res.end();
});


app.listen(port,()=>{
  console.log(`listening on http:\\localhost:${port}`);
});
