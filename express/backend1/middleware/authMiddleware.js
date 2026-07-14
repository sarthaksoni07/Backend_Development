const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
  try {

    if (!req.headers.authorization) {
      return res.status(401).json({
        success: false,
        message: "Please login",
      });
    }

    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
     console.log("auth user")
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "No Auth"
    });
    console.log("not authenticated user")
  }
};
module.exports=authMiddleware