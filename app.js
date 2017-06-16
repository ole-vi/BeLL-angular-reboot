var webpack = require('webpack'),
    webpackCfg = require('./config/webpack.config.js'),
    compiler = webpack(webpackCfg),
    express = require('express'),
    app = express(),
    path = require('path');
    
var Lint = require('tslint');

var watchOptions = {
    aggregateTimeout:300,
    poll:true
};

var watchHandler =  function(err,stats) {
    if(err) {
        console.log(err);
    }
    console.log(stats.toString({chunks:false,colors:true}));
};

compiler.watch(watchOptions,watchHandler);

app.set('port',process.env.PORT || 3000);



app.use(express.static(path.join(__dirname,'build/')));
	
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(200);
});

app.get('*',function(req,res) {
	res.sendFile('index.html', {root: path.join(__dirname,'build/') })
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});