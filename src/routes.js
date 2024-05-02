// import controllerKey from './controllers/controller-key.js';
// import controllerProgram from './controllers/controller-program.js';
// import controllerUser from './controllers/controller-user.js';
// import controllerWidget from './controllers/controller-widget.js';

const controllerKey = require('./controllers/controller-key');
// const controllerKeyAdmin = require('./controllers/controller-key-admin');
const controllerProgram = require('./controllers/controller-program');
const controllerRecord = require('./controllers/controller-record');
const controllerExport = require('./controllers/controller-export');
const controllerUser = require('./controllers/controller-user');
const controllerWidget = require('./controllers/controller-widget');

const routesProgram = [
    {
        method: 'GET',
        url: '/api/programs',
        preHandler: controllerKey.authenticateClient,
        handler: controllerProgram.list
    },
    {
        method: 'POST',
        url: '/api/programs',
        preHandler: controllerKey.authenticateAdmin,
        handler: controllerProgram.update
    }
];

const routesRecord = [
    {
        method: 'GET',
        url: '/api/records',
        preHandler: controllerKey.authenticateClient,
        handler: controllerRecord.list
    },
    {
        method: 'POST',
        url: '/api/records',
        preHandler: controllerKey.authenticateAdmin,
        handler: controllerRecord.update
    }
];

const routesExport = [
    {
        method: 'GET',
        url: '/api/exports',
        preHandler: controllerKey.authenticateAdmin,
        handler: controllerExport.list
    }
];

const routesKey = [
    {
        method: 'GET',
        url: '/api/keys',
        preHandler: controllerUser.authenticateAdmin,
        handler: controllerKey.generate,
    }
];

// const routesKeyAdmin = [
//     {
//         method: 'GET',
//         url: '/api/keys-admin/',
//         // preHandler: controllerKeyAdmin.authenticateClient,
//         // preHandler: controllerUser.authenticateClient,
//         handler: controllerKey.generate,
//     }
// ];

const routesUser = [
    {
        method: ['POST', 'HEAD'],
        url: '/signup',
        logLevel: 'warn',
        handler: controllerUser.signup
    },
    {
        method: ['POST', 'HEAD'],
        url: '/signin',
        config: {
            rateLimit: {
                max: 3,
                timeWindow: '1 minute',
                onExceeding: function (request, key) {
                    console.log('callback on exceededing ... executed before response to client');
                },
                onExceeded: function (request, key) {
                    console.log('callback on exceeded ... to black ip in security group for example, request is give as argument');
                }
            }
        },
        logLevel: 'warn',
        handler: controllerUser.signin
    },
    {
        method: ['GET', 'HEAD'],
        url: '/session',
        logLevel: 'warn',
        // preHandler: controllerUser.authenticateClient,
        handler: controllerUser.session
    },
    {
        method: ['GET', 'HEAD'],
        url: '/profile',
        logLevel: 'warn',
        preHandler: controllerUser.authenticateClient,
        handler: controllerUser.profile
    },
    {
        method: ['GET', 'HEAD'],
        url: '/signout',
        logLevel: 'warn',
        preHandler: controllerUser.authenticateClient,
        handler: controllerUser.signout
    }
];

const routesWidget = [
    {
        method: 'GET',
        url: '/api/widget',
        preHandler: controllerKey.authenticateClient,
        handler: controllerWidget.get,
    }
];

// export default [...routesProgram, ...routesKey, ...routesUser, ...routesWidget];

module.exports = [...routesProgram, ...routesRecord, ...routesKey, ...routesUser, ...routesWidget, ...routesExport];
// module.exports = [...routesProgram, ...routesKey, ...routesUser, ...routesWidget]; //, ...routesKeyAdmin

// Error: Resource not found on the server
// Status Code: 404 Not Found

// Error: Authorization Failed. Use this error when a user has been successfully 
// authenticated but lacks the necessary access rights to a resource.
// Status Code: 403 Forbidden

// Error: Authentication Failed. Incorrect username, password, or access token.
// Status Code: 401 Unauthorized

// Error: Bad Request. Errors from the client-side. like, model validation errors.
// Status Code: 400 Bad Request

// Error: Server-related errors including database exceptions.
// Status Code: 500 Internal Server Error
