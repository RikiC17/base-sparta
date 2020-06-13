const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '165.22.204.252',
    user: 'root',
    password: 'esPAda2020',
    database: 'spotifyBB'
  });
}
