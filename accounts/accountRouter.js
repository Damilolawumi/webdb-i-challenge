const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('accounts')
    .then(account => {
        res.json(200).json(account);
    })
    .catch(error => {
        res.status(500).json({ message: 'this did not go right' + error})
    })
});

