
let express = require('express');
let path = require('path');
let router = express.Router();

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
})

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
})

module.exports = router;