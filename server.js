const express = require('express');

const accountRouter = require('./accounts/accountRouter');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/posts', accountRouter)

server.get('/', (req, res) => {
    res.send('<h3>DB Helpers with knex</h3>')
});

module.exports = server;