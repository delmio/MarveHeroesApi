const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
  }));
app.use((req,res,next)=>{    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method,token,authorization,x-access-token,Authorization, Accept,X-Requested-With,content-type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
    next();
});


//rutas

app.use(require('./routes/routes'));

app.listen(5500, () =>{
    console.log('Escuchando en puerto 5500');
});