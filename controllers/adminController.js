const express = require("express");
const router = express.Router();
const db = require("../models");

//current path /dashboard
router.get('/', (req, res) => {
  db.User.find(
    {},
    (err, allUsers) => {
      if (err) return console.log(err);
      console.log(allUsers);

      res.render('dashboard', {users: allUsers});
    });
});

module.exports = router;