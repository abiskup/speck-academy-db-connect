const { Pool } = require('pg');

const pool = new Pool({
 user: 'andrijabi',
 host: '138.68.87.73',
 database: 'db_andrijabi',
 password: 'wc#Z9cH>',
 port: 5432,
})

module.exports = {
 query: (text, params, callback) => {
   return pool.query(text, params, callback);
 },
}

