const { moduleCharacter, 
        moduleCharacterWithOffset, 
        moduleCharactersById,
        moduleFindColorHero,
        moduleSaveColorHero,
        moduleUpdateColor } = require("./../module/characters.module");


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

    let resp = {
        ok: false,
        error: null,
        respuesta: null
    }

    try {

        const r = await moduleFindColorHero(req.body);

        if(r == null){

            try{

                const _save = await moduleSaveColorHero(req.body);
                resp.ok = true;
                resp.respuesta = _save; 
                res.status(200).send(resp);

            }catch(error){

                r.error = error;
                res.status(500).send(resp);
        
            }

        }else{

            try{

                const _update = await moduleUpdateColor(req.body);
                resp.ok = true;
                resp.respuesta = _update; 
                res.status(200).send(resp);

            }catch(error){

                r.error = error;
                res.status(500).send(resp);
        
            }

        }
        
    }catch(error){

        r.error = error;
        res.status(500).send(resp);

    }




}
 
module.exports = {
    characters,
    charactersById,
    charactersWithOffset,
    characterSaveColor
}