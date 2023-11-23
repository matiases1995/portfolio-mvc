const path = require('path');

const controller = {
    homeController: function(req, res) {
        res.sendFile(path.resolve('./views/home.html'));
    },
    aboutController: function(req, res) {
        res.sendFile(path.resolve('./views/about.html'));
    }
};

module.exports = controller;