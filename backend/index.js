const cors = require("cors");
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "30mb",
    extended: true,
  })
);

app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  console.log(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
