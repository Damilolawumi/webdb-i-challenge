const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('accounts')
        .then(account => {
            res.status(200).json(account);
        })
        .catch(error => {
            res.status(500).json({ message: 'this did not go right' + error })
        })
});

router.get('/:id', async (req, res) => {
    try {
        const account = await db('accounts').where({ id: req.params.id });
        res.json(account[0]);
    }
    catch (error) {
        res.status(500).json({ message: 'this did not go right' + error.message })
    }

});

router.post('/', async (req, res) => {
    try{
        const account = await db('accounts')
        .insert({
            name: req.body.name,
            budget: req.body.budget,
        })
        res.json('New post was created with an id of' + account[0]);
    } catch(error) {
        res.status(500).json({ message: 'this definately went wrong' + error.message });
    }
});


module.exports = router