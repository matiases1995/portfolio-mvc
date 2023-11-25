const path = require('path');

const controller = {
    homeController: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'));
    },
    aboutController: (req, res) => {
        res.sendFile(path.resolve('./views/about.html'));
    }
};

module.exports = controller;