/**
 * Created with JetBrains WebStorm.
 * User: dhc
 * Date: 13-8-3
 * Time: 下午9:04
 * To change this template use File | Settings | File Templates.
 */

exports.index = function(req, res){
    res.send("article");
};

exports.read = function(req, res){
    res.send("article content");
};

exports.add = function(req, res){
    res.send("add successful!");
};

exports.del = function(req, res){
    res.send("del successful!");
};

exports.modify = function(req, res){
    res.send("modify successful!");
};