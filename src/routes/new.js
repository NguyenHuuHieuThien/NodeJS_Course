const newController = require("../app/controllers/NewController");
const express = require("express");
const router = express.Router();

router.get("/", newController.index);

module.exports = router;
