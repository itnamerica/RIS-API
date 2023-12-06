// import 'dotenv/config';
// import Fastify from 'fastify';
// const fastify = Fastify({
// 	ignoreTrailingSlash: true,
// 	logger: true
// });

const fastify = require('fastify')({
	ignoreTrailingSlash: true,
	logger: true
});

// https://github.com/fastify/fastify-static
const fastifyStatic = require('@fastify/static');
const path = require('path');

// import fastifyStatic from '@fastify/static';
// import path from 'path';

// import { fileURLToPath } from 'url';
// const url = require('url');

// https://blog.danidre.com/how-i-created-my-own-authentication-system#heading-assurances
// import secureSession from '@fastify/secure-session';
const secureSession = require('@fastify/secure-session');
const configSession = {
	secret: process.env.COOKIE_SECRET || 'e56e3be3abc4665053d95f07bdf37ede02cacc971128d30d0a5e6468ecba97860d0530e086736b6ee02d02eca19e1847e4a8897e372581d3ccd4cdd3f205b88d',
	salt: 'mq9hDxBVDbspDR6n',
	// sessionName: 'session',
	cookieName: 'webfix-session',
	cookie: {
		path: '/',
		maxAge: 300
	}
};

fastify.register(fastifyStatic, {
	root: path.join(__dirname, '../public'),
	serveDotFiles: true,
	decorateReply: false
	// prefix: '/public/', // optional: default '/'
	// constraints: { host: 'example.com' } // optional: default {}
});

// fastify.register(require('@fastify/formbody'));

if (process.env.NODE_ENV === 'production') {
	configSession.cookie.secure = true; // serve secure cookies
	configSession.cookie.httpOnly = true; // serve cookies only accessible by the server
	configSession.cookie.sameSite = 'strict'; // serve cookies only from site

	fastify.register(fastifyStatic, {
		root: '/kml', // path.join(__dirname, '/kml'),
		serveDotFiles: true,
		prefix: '/kml/', // this is the URL prefix
		decorateReply: false
	});
}
fastify.register(secureSession, configSession);
//

fastify.register(import('@fastify/rate-limit'), {
	max: 100,
	timeWindow: '1 minute',
	global: false,
});

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import routes from './routes.js';
const routes = require('./routes.js');
routes.forEach((route, index) => {
	fastify.route(route);
});

(async () => {
	try {
		console.log('process.env.PORT', process.env.PORT);
		fastify.listen({
			port: process.env.PORT,
			host: process.env.HOST
		}, (err, address) => {
			if (err) {
				fastify.log.error(err);
				process.exit(1);
			}
			console.log(`API server is listening at ${address}`);
		});
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
})();

// const fastify = require('./server.js');


// Import external dependancies
// const gql = require('fastify-gql')

// Import GraphQL Schema
// const schema = require('./schema');

// Register Fastify GraphQL
// fastify.register(gql, {
// 	schema,
// 	graphiql: true
// });


// Import Swagger Options
// const swagger = require('./config/swagger');

// Register Swagger
// fastify.register(require('fastify-swagger'), swagger.options);


// const { Sequelize } = require('sequelize');

// import Sequelize from 'sequelize';
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
// 	"dialectOptions": {
// 		"ssl": {
// 			"require": true,
// 			"rejectUnauthorized": false
// 		}
// 	}
// });
// try {
// 	await sequelize.authenticate();
// 	console.log('Connection has been established successfully.');
// } catch (error) {
// 	console.error('Unable to connect to the database:', error);
// }