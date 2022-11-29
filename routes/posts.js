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
            res.json({error:err});
        }
    })

    module.exports = router;