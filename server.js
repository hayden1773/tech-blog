const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3002;

// Requiring our models for syncing
const { User, Pet } = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 2 * 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// Static directory
app.use(express.static('public'));

const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');





app.get('/dashboard', (req,res) => {
  if(req.session.User){
    res.render('dashboard', {layout : 'main'});
    return;
  }
  res.redirect("login");
  return;
})

app.get('/home', (req,res) => {
  res.render('home', {layout : 'main'});
})

app.get('/login', (req,res) => {
  res.render('login', {layout : 'main'});
})

app.get('/signup', (req,res) => {
  res.render('signup', {layout : 'main'});
})


sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});