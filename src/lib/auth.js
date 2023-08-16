const plugin = require('fastify-plugin');
async function authAH(fastify, options) {
    fastify.decorateRequest("user", null);
    fastify.decorateRequest("authenticated", null);
    fastify.decorateRequest("login", null);
    fastify.decorateRequest("logout", null);

    fastify.addHook("onRequest", (request, response, next) => {
        const getUser = () => {
            try {
                const user = request.session.get("user");
                if (user) {
                    return user;
                }
                return null;
            } catch {
                return null;
            }
        };
        request.authenticated = () => {
            return !!getUser();
        };
        request.logout = () => {
            request.session.set("user", undefined);
        };
        request.login = (data, cb) => {
            const done = function (error, user) {
                if (error) {
                    if (cb && typeof cb === "function")
                        cb(error, user);
                    return;
                }
                request.session.set("user", user);
                if (cb && typeof cb === "function")
                    cb(null, user);
            };
            try {
                if (authAH.authenticate && typeof authAH.authenticate === "function") {
                    authAH.authenticate(data, done);
                } else {
                    if (cb && typeof cb === "function")
                        cb("Cannot authenticate. No authentication method found.", null);
                }
            } catch (err) {
                if (cb && typeof cb === "function")
                    cb(err, null);
            }
        };
        request.user = getUser();
        next();
    });
}

authAH.useStrategy = (strategy) => {
    if (strategy && typeof strategy === "function") {
        authAH.authenticate = strategy;
    }
};

module.exports = plugin(authAH);
