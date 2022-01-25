const { Md5 } = require('ts-md5');
let baseurl = "https://gateway.marvel.com:443/v1/public/";
let privateKey_ = "af2e1ca8ad41cbb2ad178edbbf8784e275ff9eb5";
let publicKey_ = "bc688603c4ef146c23f721ba279c11b3";

 
function marvelHasher(){
    var md5 = new Md5();
    var ret = md5.appendStr("1"+privateKey_+publicKey_).end().toString();
    return ret;
}   
    
module.exports = {
    baseurl,
    privateKey_,
    publicKey_,
    marvelHasher
}  