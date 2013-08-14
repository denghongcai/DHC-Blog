/**
 * Created with JetBrains WebStorm.
 * User: dhc
 * Date: 13-8-4
 * Time: 下午12:21
 * To change this template use File | Settings | File Templates.
 */

var mongoskin = require('mongoskin');
var crypto = require('crypto');


var getMD5 = function(str) {
    return crypto.createHash('md5').update(str).digest('hex');
};


exports.init = function(){

    //用户操作
    mongodb.bind('user', {
        checkUser : function(username, password, callback) {
            this.find({"name": username, "passwd": password}).toArray(function(err, result){
                if (!result.length) {
                    next();
                } else {
                    console.log(result);
                    callback(1, result.uid);
                }
            });
        }
    });

    mongodb.collection("article").ensureIndex({"title":1}, {"unique":true}, function(){});

    //文章操作
    mongodb.bind('article', {
        add : function(title, tag, content, callback) {
            this.update({
                "title": title
            },
            {

                "title": title,

                "date": new Date(),

                "tag": tag,

                "content": content

            }, true,function(err, records){
                 if(err)
                    callback(false);
                 else
                    callback(true);
            });
        },
        del : function(id, callback) {
            this.removeById(id, function(err, result){
                ;
            });
        },
        list : function(start, end, callback) {
            this.find({}, {"title": true, "date": true, "tag": true}).toArray(function(err, result){
                callback(result);
            });
        },
        read : function(id, callback) {
            this.findById(id, function(err, result){
               callback(result);
            });
        }
    });

    return function init(req, resp, next) {
        next();
    };
};