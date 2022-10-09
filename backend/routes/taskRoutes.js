const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("New Route");
});

router.post('/', (req, res) => {
    res.status(200).send("Post Route");
});

router.put('/:id', (req, res) => {
    res.status(200).send(`Update Route ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.status(200).send(`Delete Route ${req.params.id}`);
});

module.exports = router;