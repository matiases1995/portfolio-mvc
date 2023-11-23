const controller = require('../controllers/mainController');
const { Router } = require('express');
const router = Router();

const routes = {
    homeRoute: '/',
    aboutRoute: '/about'
};

router.get(routes.homeRoute, controller.homeController);

router.get(routes.aboutRoute, controller.aboutController);

module.exports = router;