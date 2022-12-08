const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const postData = data.posts;

router
  .route("/")
  .get(async (req, res) => {
    res.json("login shiz");
  })
  .post(async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const added = await userData.addUser(username, password);
      console.log(added);
      res.json(added);
    } catch (e) {
      res.status(400).json(e);
    }
  });
router.route("/login").post(async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const token = await userData.loginUser(username, password);
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = router;
