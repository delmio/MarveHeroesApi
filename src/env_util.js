const { Md5 } = require('ts-md5');
var moment = require('moment');
let baseurl = 'https://gateway.marvel.com:443/v1/public/';
let privateKey = 'af2e1ca8ad41cbb2ad178edbbf8784e275ff9eb5';
let publicKey  = 'bc688603c4ef146c23f721ba279c11b3';

 
function marvelHasher(){
    var md5 = new Md5();
    var dateNow = Date.now();
    var ts =   moment(dateNow).format('MMMM Do YYYY, h:mm:ss a');
    return md5.appendStr(ts+privateKey+publicKey).end();
}
 
module.exports = {
    baseurl,
    privateKey,
    publicKey,
    marvelHasher
}