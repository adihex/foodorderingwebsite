"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DishesOrdered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Orders, Dishes }) {
      // this.belongsTo(Orders);
      this.belongsTo(Orders, {
        targetKey: "order_id",
        foreignKey: "order_id",
      });
      this.belongsTo(Dishes, {
        targetKey: "dish_id",
        foreignKey: "dish_id",
      });
    }
  }

  DishesOrdered.init(
    {
      // order_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: Orders,
      //     key: "order_id",
      //   },
      // },
      // dish_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: Dishes,
      //     key: "dish_id",
      //   },
      // },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      dish_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Started",
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "dishesordered",
      modelName: "DishesOrdered",
    }
  );

  // DishesOrdered.hasMany(Dishes, {
  //   targetKey: "dish_id",
  //   foreignKey: "dish_id",
  // });
  // // Dishes.belongsToMany(Orders, { through: DishesOrdered });
  // Dishes.hasMany(DishesOrdered);
  // Orders.hasMany(Dishes);
  // return Orders;
  return DishesOrdered;
  // return Dishes;
};
