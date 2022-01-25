const { get } = require("axios");
const heroModel = require('./../dbSchema/marvel_teams');
var env = require('./../env_util');

async function moduleCharacter(){

    var resp;
    const url = env.baseurl + "characters?ts=1&apikey=" + env.publicKey_ +  "&hash=" + env.marvelHasher();
    const headers = {
        "headers":{
            "content-type": "application/json"
        }
    };

    try {
 
        await get(url,headers)
        .then((response)=>{


            if(response.data.data.results != undefined){

                resp = response.data.data.results;

            }else{

                throw "no data";
                
            }

        });  
        
    } catch (error) {

        throw error;
    
    } 

    return resp;

}

async function moduleCharacterWithOffset(offset){
    
    var resp;
    let url = env.baseurl + "characters?ts=1&apikey=" + env.publicKey_ +  "&hash=" + env.marvelHasher() + '&offset=' + offset;
   
    let headers = {
        "headers":{
            "content-type": "application/json"
        }
    };

    try {
 
        await get(url,headers)
        .then((response)=>{

            if(response.data.data.results != undefined){

                resp = response.data.data.results;

            }else{

                throw "no data";
                
            }

        });  
        
    } catch (error) {

        throw error;
    } 

    return resp;

}

async function moduleCharactersById(idCharacter){

    var resp;
    let url = env.baseurl + "characters/"+idCharacter+"?ts=1&apikey=" + env.publicKey_ +  "&hash=" + env.marvelHasher();

    let headers = {
        "headers":{
            "content-type": "application/json"
        }
    }

    try {
 
        await get(url,headers)
        .then((response)=>{

            if(response.data.data.results != undefined){

                resp = response.data.data.results[0];

            }else{

                throw "no data";
                
            }

        });  
        
    } catch (error) {

        throw error;

    } 

    return resp;

}

async function moduleFindColorHero(idHeroe){

    let bodyParsed = {
        id: idHeroe[0].id,
        color: idHeroe[0].color
    };

    try {

        result = await heroModel.findOne({ id: Number(bodyParsed.id) }).exec();

    }catch(error){
        throw error;
    }

    
    
    return result;
}

async function moduleSaveColorHero(hero){

    let bodyParsed = {
        id: hero[0].id,
        color: hero[0].color
    };

    try {

        
        const newHeroColor = new heroModel({id:bodyParsed.id,color:bodyParsed.color});
        
        result = await newHeroColor.save().exec();

    }catch(error){
        throw error;
    }

    return result;

}

async function moduleUpdateColor(hero){

    let bodyParsed = {
        id: hero[0].id,
        color: hero[0].color
    };


    try {


        result = await heroModel.findOneAndUpdate({id:bodyParsed.id}, {color: bodyParsed.color}).exec();

    }catch(error){

        throw error;

    }

    return result;


}

module.exports = {
    moduleCharacter,
    moduleCharacterWithOffset,
    moduleCharactersById,
    moduleFindColorHero,
    moduleSaveColorHero,
    moduleUpdateColor
}