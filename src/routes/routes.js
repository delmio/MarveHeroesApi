const router = require('express').Router();
var characters = require('../controller/characters');
const { validarSchema } = require('../utils/schemaMdw');
const { characterOffsetSchema, characterByIdSchema} = require('../jsonSchema/characters.schema');

router.get('/characters/', characters.characters);
router.get('/characters/offset/:offset', validarSchema(characterOffsetSchema), characters.charactersWithOffset);
router.get('/characters/:id', validarSchema(characterByIdSchema), characters.charactersById);

router.post('/character/saveColor/',characters.characterSaveColor);

module.exports = router;