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
    app.get('/users', user.list);
    app.get('/article/read/:id', article.read);
    app.post('/article/add', article.add);
    app.delete('/article/del/:id', article.del);
    app.post('/article/modify/:id', article.modify);
};
