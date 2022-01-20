const router = require('express').Router();
var characters = require('../controller/characters');

router.get('/characters/', characters.characters);

module.exports = router;