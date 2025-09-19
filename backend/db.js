const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Uncomment for local dev with password:
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

module.exports = pool;