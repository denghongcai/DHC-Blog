/**
 * Created with JetBrains WebStorm.
 * User: dhc
 * Date: 13-8-4
 * Time: 下午12:21
 * To change this template use File | Settings | File Templates.
 */

var mongoskin = require('mongoskin');

exports.init = function(){
    var db = mongoskin.db('localhost:27017/?auto_reconnect',
        {
            database: 'test',
            safe: true
        });
    global.db = db;

    var self = this;
    return function init(req, resp, next){
        req.dbEvt = self;
        next();
    }
};