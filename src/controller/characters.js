const { get } = require("axios");
var env = require('./../env_util');

async function characters(req,res) {
     
    let url = env.baseurl + "characters?ts=1&apikey=" + env.publicKey_ +  "&hash=" + env.marvelHasher();
   
    let headers = {
        "headers":{
            "content-type": "application/json"
        }
    };

    try {
 
        await get(url,headers)
        .then((response)=>{
            res.status(200).send(response.data); 
        });  
        
    } catch (error) {
        res.status(500).send(error);
    } 
    
}

async function charactersById(req,res){

    let url = env.baseurl + "characters/"+req.params.id+"?ts=1&apikey=" + env.publicKey_ +  "&hash=" + env.marvelHasher();

    let headers = {
        "headers":{
            "content-type": "application/json"
        }
    }

    try {
 
        await get(url,headers)
        .then((response)=>{
            res.status(200).send(response.data); 
        });  
        
    } catch (error) {
        res.status(500).send(error);
    } 

}

 
module.exports = {
    characters,
    charactersById
}