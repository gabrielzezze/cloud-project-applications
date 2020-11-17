module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Tasks", {
    title: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  return Task;
};
