const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/pagesController');

router.get('/create', pagesController.create);
router.get('/welcome', pagesController.welcome);

module.exports = router;  
