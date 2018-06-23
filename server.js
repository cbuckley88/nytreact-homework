const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
