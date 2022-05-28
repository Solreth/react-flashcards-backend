module.exports = (req, res, next) => {
  next({
    status: 405,
    message: "Method Not Allowed",
  });
};
