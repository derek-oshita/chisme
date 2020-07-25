const express = require('express');
const router = express.Router();
const db = require("../models");

// CURRENT PATH: / 

// --- HOME ROUTE --- //

router.get('/', (req, res) => {
  console.log(req.body)
  res.render('landing');
});

// --- CREATE ROUTE --- //

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

// --- EXPORT ROUTER --- //
module.exports = router;