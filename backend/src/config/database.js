const ip = process.env.ip ? process.env.ip : process.env.DATABASE_IP
const password = process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : "cloud-password"

if(!ip) console.log('[ERROR] No Ip given')

module.exports = {
  username: "root",
  password: password,
  database: "Cloud",
  host: ip,
  port: "80",
  dialect: "mysql",
};
