import Server from './server/server'
import Database from './database/connect';
import Config from './config/config';
import c = require('colors/safe')

/**inicializaciones */
const config = Config.init();
const server = Server.init(config.config_port);
const database = Database.init(config.config_database);

// probando cambios

/**instancias */

server.star(() => console.log(c.blue(`Listening app on port ${config.config_port}`)))
database.connect()
    .then(() => console.log(c.magenta(`database connect`)))
    .catch((err) => console.log(c.red(err)))
