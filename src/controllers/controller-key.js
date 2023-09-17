import jwt from 'jsonwebtoken';
const API_SECRET = process.env.API_SECRET;

const generate = (request, response) => {
    let origin = request.hostname.split(':');
    let domain = origin[0];
    console.log('domain', domain);
    try {
        const key = jwt.sign({
            'domain': domain
        }, API_SECRET, {
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
    let origin = request.hostname.split(':');
    let domain = origin[0];

    // https://blog.logrocket.com/understanding-api-key-authentication-node-js/

    let keyAPI = request.query["key"]; //Add API key to headers
    try {
        if (!keyAPI) {
            console.log(`invalid key, origin: ${origin}`);
            response.status(401).send('invalid key');
        } else {
            jwt.verify(keyAPI, API_SECRET, (error, payload) => {
                console.log('authenticateKey', payload, domain);
                if (error) {
                    response.status(401).send(error);
                }

                if (domain != payload.domain) {
                    response.status(401).send('invalid key');
                }

                done();
            });
        }
    } catch (error) {
        response.status(401).send(error);
    }
};

export default { generate, authenticate };