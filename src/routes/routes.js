const router = require('express').Router();
var characters = require('../controller/characters');

router.get('/characters/', characters.characters);
router.get('/characters/:id', characters.charactersById);

module.exports = router;