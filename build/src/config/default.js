"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SERVER_TOKEN_SECRET = 'superencryptedsecret';
const SERVER_TOKEN_EXPIRETIME = 3600;
const SERVER_PORT = 4000;
const SERVER = {
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        secret: SERVER_TOKEN_SECRET
    }
};
const config = {
    server: SERVER
};
exports.default = config;
