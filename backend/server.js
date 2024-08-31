// import cors from "cors";
// import dotenv from "dotenv";
// const dotenv = require("dotenv");
// import orderRouter from "./routes/OrderRouter.js";
// import path, { dirname } from "path";
const path = require("path");
// import { fileURLToPath } from "url";
// dotenv.config();
const cors = require("cors");
const dishesRouter = require("./routes/dishesRouter.js");
const userRouter = require("./routes/userRouter.js");
const orderRouter = require("./routes/orderRouter.js");

const express = require("express");
const { sequelize } = require("./models");

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/dishes", dishesRouter);
app.use("/api/orders", orderRouter);

//Serve static assests if in production

//----------------------------------------------------
// app.use(express.static(path.join(__dirname, "../build")));
// if (process.env.NODE_ENV === "production") {
//   //set a static folder
//   app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
//   });
// }

// -----------------------------------------------------
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  console.log(err);
});

// app.listen(PORT, () => {
//   console.log(`server running at http://localhost:${PORT}`);
// });

app.listen(PORT, async () => {
  console.log(`Server up on http://localhost:${PORT}`);
  await sequelize.sync({ alter: true });
  // await sequelize.sync({ force: true });
  // await sequelize.authenticate();
  console.log("Database connected!");
});
