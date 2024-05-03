require('dotenv').config();
const jwt = require('jsonwebtoken');
const API_SECRET_READ = process.env.API_SECRET_READ;

const generate = (request, response) => {
    let domain = request.query["domain"];
    console.log('domain', domain, API_SECRET_READ);
    try {
        const key = jwt.sign({
            'domain': domain
        }, API_SECRET_READ, {
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

const authenticateClient = (request, response, done) => {
    // Retrieve the Host header from the request
    const referer = request.headers.referer;
    const domain = referer ? new URL(referer).hostname : '';

    // https://blog.logrocket.com/understanding-api-key-authentication-node-js/

    let keyAPI = request.query["key"]; //Add API key to headers
    try {
        if (!keyAPI) {
            console.log(`invalid key, origin: ${origin}`);
            response.status(401).send({ error: 'Invalid credentials' });
        } else {
            jwt.verify(keyAPI, API_SECRET_READ, (error, payload) => {
                console.log('authenticateKey payload, domain, request.headers', payload, '-' + domain, request.headers);
                if (error) {
                    response.status(401).send(error);
                }

                if (payload.domain != 'risbackend' && domain != payload.domain && !payload.domain.includes('ridesinsight.org')) {
                    response.status(401).send({ error: 'Invalid credentials' });
                }

                done();
            });
        }
    } catch (error) {
        response.status(401).send(error);
    }
};

// https://blog.logrocket.com/understanding-api-key-authentication-node-js/
const authenticateAdmin = (request, response, done) => {
    const referer = request.headers.referer;
    const host = request.headers.host;
    const domain = referer ? new URL(referer).hostname : '';

    let keyAPI = request.query["key"]; //Add API key to headers
    try {
        if (!keyAPI) {
            console.log(`invalid key, domain: ${domain}`);
            response.status(401).send('invalid key');
        } else {
            jwt.verify(keyAPI, API_SECRET_READ, (error, payload) => {
                console.log('authenticateKey payload, domain, host, request.headers', payload, '-' + domain, host, request.headers);
                if (error) {
                    response.status(401).send(error);
                }
                // console.clear();
                if (domain != 'ridesinsight.org' && host != 'localhost:3000') {
                    response.status(401).send('invalid key');
                }

                done();
            });
        }
    } catch (error) {
        response.status(401).send(error);
    }
};

// export default { generate, authenticate };

module.exports = { generate, authenticateClient, authenticateAdmin };