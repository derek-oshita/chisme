const express = require('express');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');

// middlewear
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: false}));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toLocaleTimeString()}`);
  next();
});

// routes
app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
})

app.get('*', (req, res) => {
  res.send('<h1> 404 Error Page Not Found<h1>');
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
})
