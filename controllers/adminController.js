const express = require("express");
const router = express.Router();
const db = require("../models");

// CURRENT PATH: /dashboard

// --- DASHBOARD --- // 

router.get('/', (req, res) => {
  db.User.find(
    {},
    (err, allUsers) => {
      if (err) return console.log(err);
      console.log(allUsers);

      res.render('dashboard', {users: allUsers});
    });
});

// --- EXPORT ROUTER --- // 
module.exports = router;