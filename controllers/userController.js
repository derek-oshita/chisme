const express = require('express');
const router = express.Router();
const db = require("../models");

//current path /

//home route
router.get('/', (req, res) => {
  res.render('landing');
});

module.exports= router;