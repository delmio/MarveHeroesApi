const mgdb = require('mongoose');
let dbUrl =  "mongodb://localhost:27017/marvel_teams";

const connection = async() => {

    try {
        await mgdb.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = connection;