
/*
 * GET home page.
 */

var config = require('../config').config;

exports.index = function(req, res){
    res.render('index', { title: config.site.SITE_NAME });
};

exports.err404 = function(req, res){
    res.status(404).render('err404', { title: config.site.SITE_NAME });
};
