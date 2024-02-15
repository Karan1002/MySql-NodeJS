const express = require("express");
const app = express();
const router = require("./routes/dataRoute");
const connection = require("./config/connectMysqlDB");
app.use(express.json());
app.use("/", router);

app.listen(5000);
