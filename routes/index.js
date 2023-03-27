const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// Returning response from the server
router.get('/',homeController.home);

// for creating todo
router.post('/create-todo',homeController.create);

// for delete todo
router.post('/delete-todo', homeController.delete);



console.log('router loaded');

module.exports = router;
