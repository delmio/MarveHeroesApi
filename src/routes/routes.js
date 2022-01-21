const router = require('express').Router();
var characters = require('../controller/characters');

router.get('/characters/', characters.characters);
router.get('/characters/offset/:offset', characters.charactersWithOffset);
router.get('/characters/:id', characters.charactersById);

module.exports = router;