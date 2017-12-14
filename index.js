const P = require('bluebird');
const expressServer = require('./expressServer');

P.resolve().then(() => {
    return expressServer.init();
}).catch((e) => {
    console.log(e);
});