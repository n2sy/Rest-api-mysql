const express = require("express");

const Router = express.Router();

const mysqlConnection = require("../connextion");

const peopleCtrl = require("../controllers/people");

Router.get("/", peopleCtrl.read);

Router.post("/", peopleCtrl.create);


module.exports = Router;