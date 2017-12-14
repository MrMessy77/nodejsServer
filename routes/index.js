const fs = require('fs');
const _ = require('lodash');

module.exports.initRouter = function (app) {

    let files = fs.readdirSync('./routes');

    _.each(files,(item) => {
        let obj = item.match(/(.*)\.js$/);
        if(obj.length==2 && obj[1]){
            let fileName = obj[1];
            if(fileName!='index' && fileName !='util'){
                let route = require('./'+fileName);
                app.use('/'+fileName,route);
            }
        }
    });

    app.get('/', (req, res) => {
        res.send('server start!');
    });
};
