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

exports.list = function(req, res) {
    mongodb.article.list(0, 0, function(result) {
        var item;
        console.log(result);
        for(item in result){
            console.log("title:"+result[item].title);
            res.send();
        }
    });
};

exports.read = function(req, res){
    mongodb.article.read(req.params.articleId, function(result){
        console.log(result);
    });
};

exports.add = function(req, res){
    mongodb.article.add(req.body.title, req.body.tag, req.body.content, function(status) {
        status ? res.send("add successful!") : res.send("add error!");
    });
};

exports.del = function(req, res){
    mongodb.article.del(req.params.articleId, function(){
        ;
    });
};

exports.modify = function(req, res){
    res.send("modify successful!");
};