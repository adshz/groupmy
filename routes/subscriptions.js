const express = require('express');
const router = express.Router();
const subscriptionsController = require('../controllers/subscriptionsController');

router.get('/new', subscriptionsController.new);

// Other subscription-related routes...

module.exports = router;