
/**
 * DHC-Blog, designed for my own need.
 * http://www.dhchouse.com/
 *
 * Copyright (c) 2013 DHC
 * Licensed under the MIT license.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongodb = require('mongoskin').db('localhost:27017/?auto_reconnect',
        {
            database: 'test',
            safe: true
        })
  , db = require('./db/db')
  , SkinStore = require('connect-mongoskin')
  , map = require('./map');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(db.init());
app.use(express.compress());
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.session(
    {
        secret: "dhc-blog",
        cookie: { secure: false, maxAge:86400000 },
        store: new SkinStore(mongodb)
    }));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
}

//router
map(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
