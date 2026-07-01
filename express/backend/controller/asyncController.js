const async = async (req, res, next) => {
  function hel() {
    return "hellow";
  }
  try {
    const user = await hel();
    res.send(user);
  } catch (err) {
    next(err);
  }
};
module.exports = { async };
