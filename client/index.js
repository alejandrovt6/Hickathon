const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password: '1234',
    port: 5432, 
});

pool.query('SELECT * FROM USERS', (err, res) => {
    console.log(err, res);
    pool.end();
});
