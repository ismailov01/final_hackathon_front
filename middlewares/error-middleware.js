const ErrorHandler = require("./../utils/error-handler.js");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }

  console.log(err);
  res.status(500).json({ message: "Internal server error, try again later" });
};

module.exports = errorMiddleware;
