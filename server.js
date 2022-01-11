require("dotenv").config();
const express = require("express");
const swaggerUI = require('swagger-ui-express')
const cors = require("cors");
const fileupload = require('express-fileupload')
const sequelize = require("./db");
const routes = require("./routes");
const path = require('path')
const docs = require('./docs')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express();
app.use(cors());
app.use(fileupload({ createParentPath: true }))
app.use(express.static(path.resolve('static')))
app.use(express.json());

app.use("/api", routes);
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(docs))
app.use(errorMiddleware)

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log("server running on port" + PORT));
  } catch (e) {
    console.log(e);
  }
};

startServer();
