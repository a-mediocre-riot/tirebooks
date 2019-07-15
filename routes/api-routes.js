const router = require('express').Router();
const User = require('../models/userModel'); 

// GET All Users
router.get('/users', function (req, res) {
    console.log('get all users');
    User.find({}).then(eachOne => {
        res.json(eachOne);
    });
});


// POST User
router.post('/users', function (req, res) {
    console.log('post a user');
    User.create(req.body).then(user => {
        res.json(user);
    });
});

// GET User by ID
router.get('/users/:user_id', function (req, res) {
    console.log("get user by id " + req.params.user_id);
    User.find({ user_id: req.params.user_id }).then(function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

// PUT User by ID
router.put('/users/:user_id', function (req, res) {
    User.findOneAndUpdate({user_id: req.params.user_id}, res.body).then(user => {
        res.json(user);
    });
});

module.exports = router;