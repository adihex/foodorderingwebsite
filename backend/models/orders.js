"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Account, DishesOrdered }) {
      // define association here
      this.belongsTo(Account, {
        targetKey: "account_id",
        foreignKey: "account_id",
      });
      this.hasMany(DishesOrdered, { foreignKey: "order_id" });
    }
  }
  Orders.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      delivery_address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "Address should not be empty",
          notNull: "Address should not be null",
        },
      },
      order_status: {
        type: DataTypes.STRING,
        defaultValue: "Started",
        allowNull: false,
      },
      order_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Orders",
    }
  );

  // return Orders;
  return Orders;
  // return Dishes;
};
