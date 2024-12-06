const express = require("express");
const app = express();
const mahasiswa = require("./routes/mahasiswa");
app.use("/mahasiswa", mahasiswa);
module.exports = app;
