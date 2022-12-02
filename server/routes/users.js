const express = require('express');
const router = express.Router();
const data = require('../data');
const userData = data.users;
const postData = data.posts;

router
    .route('/')
    .get(async (req, res) => {
        res.json('login shiz');
    })
    .post(async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const added = await userData.addUser(username, password);
        res.json(added);
    });


module.exports = router;