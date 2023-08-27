import controllerKey from './controllers/controller-key.js';
import controllerProgram from './controllers/controller-program.js';
import controllerUser from './controllers/controller-user.js';
import controllerWidget from './controllers/controller-widget.js';

const routesProgram = [
    {
        method: 'GET',
        url: '/api/programs',
        // preHandler: controllerKey.authenticate,
        handler: controllerProgram.list
    },
    {
        method: 'GET',
        url: '/api/programs/:id',
        handler: controllerProgram.get
    },
    {
        method: 'POST',
        url: '/api/programs',
        handler: controllerProgram.add
    },
    {
        method: 'PUT',
        url: '/api/programs/:id',
        handler: controllerProgram.update
    },
    {
        method: 'DELETE',
        url: '/api/programs/:id',
        handler: controllerProgram.remove
    }
];

const routesKey = [
    {
        method: 'GET',
        url: '/api/keys',
        preHandler: controllerKey.authenticate,
        handler: controllerKey.generate,
    }
];

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
        // preHandler: controllerUser.authenticate,
        handler: controllerUser.session
    },
    {
        method: ['GET', 'HEAD'],
        url: '/profile',
        logLevel: 'warn',
        preHandler: controllerUser.authenticate,
        handler: controllerUser.profile
    },
    {
        method: ['GET', 'HEAD'],
        url: '/signout',
        logLevel: 'warn',
        preHandler: controllerUser.authenticate,
        handler: controllerUser.signout
    }
];

const routesWidget = [
    {
        method: 'GET',
        url: '/api/widget',
        // preHandler: controllerKey.authenticate,
        handler: controllerWidget.get,
    }
];

export default [...routesProgram, ...routesKey, ...routesUser, ...routesWidget];

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
