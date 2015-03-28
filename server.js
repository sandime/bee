/**
 * Created by SHERRI on 3/27/15.
 */
var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static(__dirname));
app.listen(port);
console.log('and the magic is here: http://localhost:'+port+'/index.html');
