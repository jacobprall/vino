import { Pool } from 'pg';
require('dotenv').config();

export default new Pool({
  user: process.env.PG_USERNAME,
  host: process.env.DEV_HOST,
  database: 'vino_1',
  password: process.env.PG_PASSWORD,
  port: 5432,
});

