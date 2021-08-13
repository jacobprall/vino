"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
exports.default = new pg_1.Pool({
    user: process.env.PG_USERNAME,
    host: process.env.DEV_HOST,
    database: 'vino_1',
    password: process.env.PG_PASSWORD,
    port: 5432,
});
