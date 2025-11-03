const url = require('url');
const myUrl = new URL('https://coschedule.com/marketing-terms-definitions/hypertext-transfer-protocol-secure-https');

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.hash);
console.log(myUrl.port);
