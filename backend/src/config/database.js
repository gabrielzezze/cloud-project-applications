const ip = process.env.ip ? process.env.ip : process.env.DATABASE_IP
const password = process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : "cloud-password"

if(!ip) console.log('[ERROR] No Ip given')

// module.exports = {
//   username: "root",
//   password: password,
//   database: "Cloud",
//   host: ip,
//   port: "80",
//   dialect: "mysql",
// };

module.exports = {
  username: "megadados",
  password: 'megadados',
  database: "Cloud",
  host: '127.0.0.1',
  port: "3306",
  dialect: "mysql",
};


