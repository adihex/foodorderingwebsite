"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../utils/db.js");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     console.log(file);
//     return (
//       file.indexOf(".") !== 0 &&
//       file !== basename &&
//       file.slice(-3) === ".js" &&
//       file.indexOf(".test.js") === -1
//     );
//   })
//   .forEach((file) => {
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize.DataTypes
//     );
//     // model.array.forEach(m => {
//     //   db[m.name] = m
//     // });
//     console.log(model.name);
//     db[model.name] = model;
//   });

const account = require("./account.js")(sequelize, Sequelize.DataTypes);
const dishes = require("./dishes.js")(sequelize, Sequelize.DataTypes);
const orders = require("./orders.js")(sequelize, Sequelize.DataTypes);
const dishordered = require("./dish_ordered.js")(
  sequelize,
  Sequelize.DataTypes
);

db[account.name] = account;
// console.log(account.name);
db[dishes.name] = dishes;
// console.log(dishes.name);
db[orders.name] = orders;
// console.log(orders.name);
db[dishordered.name] = dishordered;
// console.log(dishordered.name);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = db;
