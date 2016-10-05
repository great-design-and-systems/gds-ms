import express = require('express');
import {Server} from "./src/config/server";
import {Database} from "./src/config/database";
import {Logger} from "./src/config/logger";
const app = express();
new Server(app);
new Logger(app);
export = app;