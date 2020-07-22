const express = require('express');
const router = express.Router();
const db = require("../models");

//current path /

//home route
router.get('/', (req, res) => {
  console.log(req.body)
  res.render('landing');
});

//task CREATE route
router.post('/', (req, res) => {
  const newUser = req.body;
  console.log(newUser)
  db.User.create(
    newUser,
    (err, createdUser) => {
      if (err) return console.log(err);
      console.log(createdUser)

      res.redirect('/dashboard');
    });
  });


module.exports = router;