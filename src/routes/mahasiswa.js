const express = require("express");
const route = express.Router();
const mahasiswaControllers = require("../controllers/mahasiswaControllers");
route.get("/", mahasiswaControllers.getAll);
route.get("/:id", mahasiswaControllers.getOne);
route.post("/", mahasiswaControllers.insert);
route.patch("/:id", mahasiswaControllers.update);
route.delete("/:id", mahasiswaControllers.remove);

module.exports = route;
