import jwt from 'jsonwebtoken';
// const auth from ('../lib/auth');
import { compare, genSaltSync, hash } from 'bcrypt';

// const boom from ('boom');
const PRIVATE_KEY = process.env.PRIVATE_KEY;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const session = async (request, response) => {
    const authenticated = authenticate(request);
    response.status(200).send({
        authenticated,
        response: response.getResponseTime(),
        timeout: parseInt(process.env.COOKIE_MAX_AGE)
    });
};

const signup = async (request, response) => {
    try {
        let { password, email, name } = request.body;
        password = await hashPassword(password);

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (user) {
            response.status(400).send('Email already used.');
        }

        const userNew = await prisma.user.create({
            data: {
                password,
                email,
                name
            }
        });
        // return userNew;
        response.status(200).send(userNew);
        // response.send({ data: { user } })
    } catch (error) {
        response.status(400).send(error);
    }
};

const signin = async (request, response) => {
    try {
        const { email, password } = request.body;
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PW = process.env.ADMIN_PW;

        const ADMIN_EMAIL_RIS = process.env.ADMIN_EMAIL_RIS;
        const ADMIN_PW_RIS = process.env.ADMIN_PW_RIS;

        if ((email === ADMIN_EMAIL && password === ADMIN_PW) || (email === ADMIN_EMAIL_RIS && password === ADMIN_PW_RIS)) {
            let user = { name: 'Admin' };
            request.session.set('user', user);
            console.log('user', user);
            response.status(200).send({ success: true, user });
        } else {
            return response.status(401).send({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.log('error', error);
        return response.status(500).send({ error: 'Sign in failed!' });
    }
};

const profile = async (request, response) => {
    response.status(200).send({
        user: request.session.get('user'),
        response: response.getResponseTime()
    });
};

const signout = async (request, response) => {
    request.session.set('user', null);
    response.status(200).send({
        success: true,
        user: request.session.get('user'),
        response: response.getResponseTime()
    });
};

const hashPassword = (password) => {
    let salt = genSaltSync(10);
    return new Promise(resolve => {
        hash(password, salt, (error, saltedPassword) => {
            if (error) {
                resolve(false);
            }
            resolve(saltedPassword);
        });
    });
};

const comparePassword = (password, hashedPassword) => {
    return new Promise(resolve => {
        compare(password, hashedPassword, (error, same) => {
            if (error) {
                resolve(false);
            }
            else {
                resolve(same);
            }
        });
    });
};

const getUser = (request) => {
    try {
        const user = request.session.get('user');
        if (user) {
            return user;
        }
        return false;
    } catch {
        return false;
    }
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject('invalid token');
            return;
        }

        jwt.verify(token, PRIVATE_KEY, {}, (error, decoded) => {
            if (error) {
                reject('invalid token');
                return;
            }
            resolve(decoded);
        });
    });
};

const authenticate = (request) => {
    let user = getUser(request);
    request?.session.set('user', user);
    return !!user;
};

export default { signup, signin, session, profile, signout };

// const verifyUPW = async (request, response) => {
//     try {
//         if (!request.headers.authorization) {
//             throw new Error('No token was sent');
//         }
//         const token = request.headers.authorization.replace('Bearer ', '');
//         const user = await User.findByToken(token);
//         if (!user) {
//             // handles logged out user with valid token
//             throw new Error('Authentication failed!');
//         }
//         request.user = user;
//         request.token = token; // used in signout route
//     } catch (error) {
//         response.status(401).send(error);
//     }
// };

// auth.useStrategy(async (data, done) => {
//     const { email, password } = data;
//     try {
//         const user = await prisma.user.findUnique({
//             where: {
//                 email
//             }
//         });
//         if (!user)
//             return done('User does not exist');

//         if (passwordVerifier.verify(password, user.password)) {
//             return done(null, { id: user.id, username: user.username });
//         } else {
//             return done('Username or password incorrect');
//         }
//     } catch (err) {
//         return done(err);
//     }
// });

// const createAccessToken = (data) => {
//     return new Promise((resolve, reject) => {
//         jwt.sign(data, PRIVATE_KEY, {}, (error, token) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve(token);
//         });
//     });
// };