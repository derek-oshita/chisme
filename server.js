const express = require('express');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const session = require('express-session');

const userCtrl = require('./controllers/userController');
const adminCtrl = require("./controllers/adminController");

const app = express();

app.set('view engine', 'ejs');

// middlewear

app.use(express.static(__dirname + '/css'));


app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false}));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});

// routes
app.use('/', userCtrl);

app.use('/dashboard', adminCtrl);


app.get('*', (req, res) => {
  res.send('<h1> 404 Error Page Not Found<h1>');
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})
