
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'DHC-Blog' });
};

exports.err404 = function(req, res){
    res.render('err404', {title: 'DHC-Blog'});
};
