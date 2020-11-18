const ip = process.env.ip ? process.env.ip : process.env.IP

if(!ip) console.log('[ERROR] No Ip given')

module.exports = {
  username: "root",
  password: "cloud-password",
  database: "Cloud",
  host: ip,
  port: "80",
  dialect: "mysql",
};
