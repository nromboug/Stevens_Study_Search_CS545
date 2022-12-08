const express = require('express');
const router = express.Router();
const data = require('../data');
const postData = data.posts;


router
    .route('/')
    .get(async (req, res) => {
        try {
            res.json(await postData.getAllPosts());
        } catch (e) {
            res.json({ error: e })
        }
    })
    .post(async (req, res) => {
        try {
            const posterId = req.body.posterId;
            const name = req.body.name;
            const location = req.body.location;
            const date = req.body.date;
            const time = req.body.time;
            const inserted = await postData.createPost(
                posterId,
                name,
                location,
                date,
                time
            );
            res.json(inserted);
        } catch (e) {
            res.json({ error: e })
        }
    });
router
    .route('/:id')
    .delete(async (req, res) => {
        try {
            const removed = await postData.deletePost(req.params.id);
            res.json(removed);
        } catch (err) {
            res.json({ error: err });
        }
    })
    .put(async (req, res) => {
        try {
            const posterId = req.body.posterId;
            const name = req.body.name;
            const location = req.body.location;
            const date = req.body.date;
            const time = req.body.time;
            const updated = await postData.updatePost(
                posterId,
                name,
                location,
                date,
                time
            );
            res.json(updated);
        } catch (e) {
            res.json({ error: e })
        }
    })

router
    .route('/rsvp/:id')
    .post(async (req, res) => {
        const inserted = await postData.rsvpPost(req.params.id);
        res.json('ok');
    })


router
    .route('/categories')
    .get(async (req, res) => {
        const groups = await postData.getAllPosts();
        const categories = [];
        for (let post of groups) {
            if (!categories.includes(post.name))
                categories.push(post.name);
        }
        res.json(categories);
    });

router
    .route('/category/:cat')
    .get(async (req, res) => {
        const groups = await postData.getPostsByName(req.params.cat);
        res.json(groups);
    });

module.exports = router;