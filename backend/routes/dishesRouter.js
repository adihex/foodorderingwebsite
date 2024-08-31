const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const Sequelize = require("sequelize");
const data = require("../data.js");
const { Dishes } = require("../models");
const Op = Sequelize.Op;
// import { isAuth } from "../utlis.js";

const dishesRouter = express.Router();

dishesRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    console.log(req.category);
    if (req.query.category == undefined) {
      const dishes = await Dishes.findAll();
      res.send(dishes);
    } else {
      const dishes = await Dishes.findAll({
        where: { category: req.query.category },
      });
      res.send(dishes);
    }
  })
);

dishesRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const searchedDishes = await Dishes.findAll({
      where: { dish_name: { [Op.like]: `%${req.query.name}%` } },
    });
    if (searchedDishes) {
      res.send(searchedDishes);
    } else {
      res.status(402).send({ message: "Opps No dishes found!!" });
    }
  })
);

dishesRouter.put(
  "/update-dish",
  expressAsyncHandler(async (req, res) => {
    const dish = await Dishes.findOne({ where: { dish_id: req.body.dish_id } });
    if (dish) {
      dish.dish_name = req.body.dish_name;
      dish.dish_description = req.body.dish_description;
      dish.dish_price = req.body.dish_price;
      dish.type = req.body.type;
      dish.category = req.body.category;
      dish.cooking_time = req.body.cooking_time;
      dish.image_url = req.body.image_url;
      dish.rating = req.body.rating;
      const updatedDish = await dish.save();
      res.send({
        _id: dish.dish_id,
        dish_name: dish.dish_name,
        dish_price: req.body.dish_price,
        type: req.body.type,
        category: req.body.category,
        cooking_time: req.body.cooking_time,
        image_url: req.body.image_url,
        rating: req.body.rating,
      });
    } else {
      res.status(404).send({ message: "Dish not found" });
    }
  })
);

dishesRouter.post(
  "/add-dish",
  expressAsyncHandler(async (req, res) => {
    const newDish = {
      dish_name: req.body.dish_name,
      dish_description: req.body.dish_description,
      dish_price: req.body.dish_price,
      type: req.body.type,
      category: req.body.category,
      cooking_time: req.body.cooking_time,
      image_url: req.body.image_url,
      rating: req.body.rating,
    };
    const dish = await Dishes.create(newDish);
    res.send(dish);
  })
);

dishesRouter.delete(
  "/delete-dish",
  expressAsyncHandler(async (req, res) => {
    const dish = await Dishes.findOne({ where: { dish_id: req.body.dish_id } });
    if (dish) {
      await dish.destroy();
      return res.send({ message: "Dish deleted" });
    } else {
      res.status(404).send({ message: "Dish not found!" });
    }
  })
);

dishesRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    console.log(data.dishes);
    const createDishes = await Dishes.bulkCreate(data.dishes);
    res.send({ Dishes: createDishes });
  })
);

dishesRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const dish = await Dishes.findOne({where: { dish_id: req.params.id }});
    if (dish) {
      res.send(dish);
    } else {
      res.status(404).send({ message: "Dish not found!" });
    }
  })
);

module.exports = dishesRouter;
