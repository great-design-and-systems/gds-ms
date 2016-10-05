import bodyParser = require('body-parser');
import morgan = require('morgan');

const PORT = process.env.PORT || '3000';
const ENV = process.env.NODE_ENV || 'dev';

export function Server(app) {
    app.set('port', PORT);
    app.use(morgan(ENV));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({
        type: 'application/vnd.api+json'
    }));
    app.listen(app.get('port'), () => {
        console.log('Node app is running on port', app.get('port'))
    });
}