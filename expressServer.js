const http = require('http');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const routes = require('./routes');

const app = express();

module.exports.init = function () {

    let sessionOptions = {
        secret: 'nodejsServer',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000*60*60*24*10 }
    };

    //Gzip压缩
    app.use(compression());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());

    app.use(cookieParser(sessionOptions.secret));

    app.use(session(sessionOptions));

    //路由设置
    routes.initRouter(app);

    http.createServer(app).listen(3000);
    console.log('Server started');
};