var jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, "bhashkar");
    console.log("decoded", decoded);
    if (decoded) {
      req.body.USER_ID = decoded.USER_ID;
      next();
    } else {
      res.status(400).send({ msg: "Login Token Error" });
    }
  } else {
    res.status(400).send({ msg: "Token Not Found" });
  }
};

module.exports = {
  auth,
};
