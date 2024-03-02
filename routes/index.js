var express = require('express');
var router = express.Router();
const userModel = require('./users');

// GET request handler for rendering the form
router.get('/', function(req, res) {
    res.render('form');
});

// POST request handler for processing form submissions
router.post('/create', async function(req, res) {
    // Extract form data from req.body
    const { name, email, password } = req.body;

    // Create a new user document
    
    const createduser = await userModel.create({
        name: name,
        email: email,
        password:password
    })
    res.send(createduser)
});

module.exports = router;
