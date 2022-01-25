const { moduleCharacter, moduleCharacterWithOffset, moduleCharactersById } = require("./../module/characters.module");


async function characters(req,res) {
    
    try {

        const result = await moduleCharacter();
        res.status(200).send(result);

    }catch(error){

        res.status(500).send(error);

    }
    
}

async function charactersWithOffset(req,res) {
     
    try {

        const result = await moduleCharacterWithOffset(req.params.offset);

        res.status(200).send(result);

    }catch(error){

        res.status(500).send(error);

    }
    
}

async function charactersById(req,res){

    try {

        const result = await moduleCharactersById(req.params.id);

        res.status(200).send(result);

    }catch(error){

        res.status(500).send(error);

    }


}


async function characterSaveColor(req,res){

}
 
module.exports = {
    characters,
    charactersById,
    charactersWithOffset,
    characterSaveColor
}