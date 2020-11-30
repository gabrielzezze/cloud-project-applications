module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING
    });
  
    return User;
  };
  