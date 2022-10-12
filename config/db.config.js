require("dotenv").config();

module.exports = {
  HOST    : process.env.PGHOST,
  USER    : process.env.PGUSER,
  PASSWORD: process.env.PGPASSWORD,
  DB      : process.env.PGDATABASE,
  dialect : "postgres",
  pool    : {
    max    : 5,       // max number connection in pool
    min    : 0,       // min number connection in pool
    acquire: 30000,   // max time pool try to get connection before throw error
    idle   : 10000    // max time connection can be idle before released
  }
};