const allowSelfOrAdmin = (req, res, next) => {
  if (req.user.role === "admin") {
    return next();
  }

  res.status(403).json({
    message: "forbidden",
    success: false,
  });
};
module.exports = allowSelfOrAdmin;
