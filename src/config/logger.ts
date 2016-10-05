import log4js = require('log4js');
const LOG_FILE = process.env.APP_LOG || 'system.log';
const APP_NAME = process.env.APP_NAME || 'gds_service';

export function Logger(app) {
    log4js.configure({
        appenders: [
            { type: 'console' },
            { type: 'file', filename: LOG_FILE, category: APP_NAME }
        ],
        replaceConsole: true
    });
    var logger = log4js.getLogger(APP_NAME);
    app.use(log4js.connectLogger(logger, { level: 'auto' }));
}