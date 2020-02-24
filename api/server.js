const express = require('express');
const authRouter = require('../auth/auth-router');
const server = express();
const router = require('../auth/auth-router')
server.use(express.json());
server.use('/api/auth', authRouter);
server.use(router)
module.exports = server;