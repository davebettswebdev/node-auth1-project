const express = require('express');
const authRouter = require('../auth/auth-router');
const dbConnection = require('../data/db-config');
const restricted = require('../middleware/restricted');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const server = express();

server.use(express.json());


const sessionConfig = {
  name: 'MKnight',
  secret: process.env.SESSION_SECRET || "I see dead people",
  cookie: {
    maxAge: 60 * 1000,
    secure: false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: dbConnection,
    tablename: 'sessionStorage',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 60000,
  })
}

server.use(session(sessionConfig));
server.use(restricted);
server.use('/api/auth', authRouter);

module.exports = server;