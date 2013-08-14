/**
 * Created with JetBrains WebStorm.
 * User: dhc
 * Date: 13-8-4
 * Time: 上午11:24
 * To change this template use File | Settings | File Templates.
 */

var routes = require('./routes')
    , user = require('./routes/user')
    , article = require('./routes/article');

module.exports = function(app){
    app.get('/', routes.index);
    app.all('/user/login', user.login);
    app.get('/article', article.index);
    app.get('/article/list/:pageId', article.list);
    app.get('/article/read/:articleId', article.read);
    app.post('/article/add', article.add);
    app.delete('/article/del/:articleId', article.del);
    app.post('/article/modify/:articleId', article.modify);
    app.get('/ua', function(req, res){
      var ua = req.headers['user-agent'];   //注意这里需要先暂存
      if( /msie 6.0/i.test(ua))
        res.send('You are using IE6!');
      else if( /msie 7.0/i.test(ua)) {
        res.send('You are using IE7!');
      }
      else
        res.send('You are not using IE!');
    });
    app.get('*', routes.err404);
};

