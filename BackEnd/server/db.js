const { Pool, Client } = require("pg");

module.exports = {
  pool: new Pool({
    connectionString: process.env.DATABASE_URI,
    ssl: { rejectUnauthorized: false },
  }),
};

// See all the tables!
// pool.query("SELECT * FROM pg_class WHERE relkind = 'r';", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });
