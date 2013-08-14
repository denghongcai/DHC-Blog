
/*
 * GET users listing.
 */

var _renderLoginPage = function(resp, isLogin) {
    var view = {
        isLogin : isLogin
    };

    resp.render('login', view);
};

exports.login = function(req, resp) {
    var isLogin = false;

    if (req.body.name && req.body.password) {

        var name = req.body.name, password = req.body.password;
        mongodb.user.checkUser(name, password, function(isUser, uid) {
            if (typeof isUser == 'number') {
                req.session.user = {
                    id: uid,
                    name: name,
                    time: new Date()
                };

                isLogin = true;
            }
            resp.send(200, "logged");
        });
    } else {
        if (req.session.user)
            isLogin = true;

        resp.send(200, "not login");
    }
}