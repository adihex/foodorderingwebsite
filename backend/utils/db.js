const Sequelize = require("sequelize");
// const env = process.env.NODE_ENV || "development";
const config = require("../config/config").development;

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  operatorsAliases: 0,
  logging: 0,
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection set up successfully!");
  } catch (err) {
    console.log("Unable to connect to the database", err);
  }
})();

module.exports = sequelize;
global.sequelize = sequelize;
