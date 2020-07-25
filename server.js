const express = require('express');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
// const session = require('express-session');
const app = express();

// --- ROUTER CONTROLLERS --- //

const userCtrl = require('./controllers/userController');
const adminCtrl = require("./controllers/adminController");

// --- VIEW ENGINE --- // 

app.set('view engine', 'ejs');

// --- MIDDLEWARE --- //

// STATIC ASSETS
app.use(express.static(__dirname + '/css'));

// METHOD OVERRIEDE
app.use(methodOverride('_method'));

// URL ENCODED 
app.use(express.urlencoded({ extended: false}));

// CUSTOM LOGGER
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});

// --- ROUTES --- // 

// USER CONTROLLER
app.use('/', userCtrl);

// DASHBOARD CONTROLLER
app.use('/dashboard', adminCtrl);

// 404 WEBPAGE NOT FOUND
app.get('*', (req, res) => {
  res.send('<h1> 404 Error Page Not Found<h1>');
})

// --- SERVER LISTENER --- //
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})
