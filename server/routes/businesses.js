const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/search/:name', (req, res) => {
    res.send('OK');
});

module.exports = router;