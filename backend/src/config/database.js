const ip = process.env.ip;

module.exports = {
  username: "root",
  password: "cloud-password",
  database: "Cloud",
  host: ip,
  port: "80",
  dialect: "mysql",
};
