const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);

module.exports = router;


 express = require('express');
 router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authorizationMiddleware');

router.get('/', authMiddleware('user', 'View Dashboard'), dashboardController.getDashboard);

module.exports = router;
