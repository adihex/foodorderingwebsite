const jwt = require("jsonwebtoken");
const jwtSecret = "Thisismysecretpasswordthatyoudonotknow";
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user.account_id,
      name: user.customer_name,
      email: user.email,
      phone_no: user.phone_no,
    },
    jwtSecret,
    {
      expiresIn: "10d",
    }
  );
};

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.slice(7, authorization.length); //bearer token value
    jwt.verify(token, jwtSecret, (err, decode) => {
      if (err) {
        res.status(401).send({ message: err.message });
      } else {
        req.body = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No token" });
  }
};

module.exports = { generateToken, isAuth };
