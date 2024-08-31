const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { Orders, DishesOrdered, Dishes } = require("../models");
const { isAuth } = require("../utils/utils.js");

const orderRouter = express.Router();

orderRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Orders.findAll({
      where: { account_id: req.query._id },
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
    });
    res.send(orders);
  })
);

orderRouter.get(
  "/admin-orders",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Orders.findAll({
      order: [["order_time", "DESC"]],
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
      limit: 100,
    });
    res.send(orders);
  })
);

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { delivery_address, _id, notes, orderItems } = req.body;

    if (orderItems.length === 0) {
      res.status(400).send({ message: "cart is empty!" });
      return;
    }
    const newOrder = {
      delivery_address: delivery_address,
      account_id: _id,
      notes: notes,
    };

    try {
      const order = await Orders.create(newOrder);

      try {
        for (const item of orderItems) {
          const { dish_id, quantity } = item;
          const dishPresent = await Dishes.findOne({
            where: { dish_id: dish_id },
          });
          if (dishPresent) {
            const newDish = {
              order_id: order.order_id,
              dish_id: dish_id,
              quantity: quantity,
            };
            await DishesOrdered.create(newDish);
          } else {
            console.log("dish not present. Connot add order");
            DishesOrdered.destroy({ where: { order_id: order_id } });
            order.destroy();
            throw "Invalid dishes";
          }
        }
        res.status(201).send({ message: "Order Placed !", order: order });
      } catch (err) {
        res.status(401).send({ message: err });
      }
    } catch (err) {
      res.status(401).send({ message: err });
    }
  })
);

orderRouter.put(
  "/update-dish_ordered-status",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const dish = await DishesOrdered.findOne({
      where: { order_id: req.body.order_id, dish_id: req.body.dish_id },
    });
    if (dish) {
      dish.dish_status = req.body.dish_status;
      const updatedDish = await dish.save();
      res.send(updatedDish);
    } else {
      res.status(404).send({ message: "Item in order not found" });
    }
  })
);

orderRouter.delete(
  "/delete-dish_ordered",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const dish = await DishesOrdered.findOne({
      where: { order_id: req.body.order_id, dish_id: req.body.dish_id },
    });
    if (dish) {
      await dish.destroy();
      res.send({ message: "Item in order deleted" });
    } else {
      res.status(404).send({ message: "Item in order not found" });
    }
  })
);

orderRouter.put(
  "/update-order-status",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Orders.findOne({
      where: { order_id: req.body.order_id },
    });
    if (order) {
      order.order_status = req.body.order_status;
      const updatedOrder = await order.save();
      res.send(updatedOrder);
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

orderRouter.delete(
  "/delete-order",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Orders.findOne({
      where: { order_id: req.body.order_id, account_id: req.body.account_id },
    });
    if (order) {
      await order.destroy();
      res.send({ message: "Order deleted" });
    } else {
      res.status(404).send({ message: "Order not found" });
    }
  })
);

orderRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await Orders.findOne({
      where: { order_id: id },
      include: [
        {
          model: DishesOrdered,
          include: [
            {
              model: Dishes,
            },
          ],
        },
      ],
    });
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: "Order Not Found" });
    }
  })
);

module.exports = orderRouter;
