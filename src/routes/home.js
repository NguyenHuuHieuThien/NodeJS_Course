const HomeController = require('../app/controllers/HomeController');
const express = require('express');
const router = express.Router();

router.get('/', HomeController.show);

module.exports = router;
