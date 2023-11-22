const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const sequelize = require("./util/database");

const homeRoute = require("./routes/admin");

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use("/home", homeRoute);

sequelize
  .sync()
  .then((res) => {
    // console.log(res);
    app.listen(4000);
  })
  .catch((err) => console.log(err));
