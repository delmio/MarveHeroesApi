const { get } = require("axios");
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

module.exports = {
    moduleCharacter,
    moduleCharacterWithOffset,
    moduleCharactersById
}