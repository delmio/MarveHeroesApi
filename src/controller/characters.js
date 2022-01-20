const { get } = require("axios");
var env = require('./../env_util');

async function characters(req,res) {
     
    let url = env.baseurl + 'characters?apikey=' + env.publicKey + '&hash=' + env.marvelHasher(); 
    let headers = {
        "headers":{
            "content-type": "application/json"
        }
    };

    try {
 
        const response = await get(url,headers);

        res.status(200).send(response);
    
    } catch (error) {

        console.log(error.response); 
        res.status(500).send(error);
    
    } 
    
}

 
module.exports = {
    characters
}