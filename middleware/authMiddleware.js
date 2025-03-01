// authMiddleware.js

const jwt = require("jsonwebtoken");

const { secret } = require("../config");

function authenticate(req, res, next ) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(302).json({
      error: "Authorization header missing"
    });
  }
  try {
    const decodedToken = jwt.verify(token, secret);
    req.userId = decodedToken.userId;
    next();

  } catch (error) {
    return res.status(501).json({
      error: "Invalid token"
    });
  }
}