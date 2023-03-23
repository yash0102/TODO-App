const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// Returning response from the server
router.get('/',homeController.home);

module.exports = router;