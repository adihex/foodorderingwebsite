"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ DishesOrdered }) {
      // define association here
      this.hasMany(DishesOrdered, { foreignKey: "dish_id" });
    }
  }
  Dishes.init(
    {
      dish_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      dish_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: "Name must not be empty",
          notNull: "Name must not be NULL",
        },
      },
      dish_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dish_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cooking_time: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          max: 10,
          min: 0,
        },
      },
    },
    {
      sequelize,
      tableName: "dishes",
      modelName: "Dishes",
    }
  );

  // return Orders;
  return Dishes;
  // return Dishes;
};
