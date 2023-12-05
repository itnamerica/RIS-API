// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
const API_SECRET_ADMIN = process.env.API_SECRET_ADMIN;

const generate = (request, response) => {
    // let origin = request.hostname.split(':');
    // let domain = origin[0];
    let domain = request.query["domain"];
    console.log('domain', domain);
    try {
        const key = jwt.sign({
            'domain': domain
        }, API_SECRET_ADMIN, {
            algorithm: 'HS256'
        });

        console.log('key', key);
        response.code(200).send({
            key: key
        });

    } catch (error) {
        response.status(401).send('generate: ' + error);
    }
};

const authenticate = (request, response, done) => {
    // response.header("Access-Control-Allow-Origin", "*");
    // response.header("Access-Control-Allow-Methods", "POST");

    let keyAPI = request.query["key"];
    console.clear();
    console.log('request.body', keyAPI);

    try {
        if (!keyAPI) {
            response.status(401).send('invalid key');
        } else {
            jwt.verify(keyAPI, API_SECRET_ADMIN, (error, payload) => {
                console.log('authenticateKey', payload, domain);
                if (error) {
                    response.status(401).send(error);
                }
                done();
            });
        }
    } catch (error) {
        response.status(401).send(error);
    }
};

// export default { generate, authenticate };

module.exports = { generate, authenticate };