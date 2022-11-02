const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "8488",
  host: "localhost",
  port: 5432,
  database: "postgres",
});
module.exports = pool;
