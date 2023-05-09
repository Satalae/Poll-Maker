// Import modules and files
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helper');

// Set up sequelize constants
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create a new Express app
const app = express();

// Set the port to listen on
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Session configuration 
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 30 * 60 * 1000, // 30 minutes
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Set up Express to use the session middleware
app.use(session(sess));

// Set up the Express app to use the Handlebars.js template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define the routes using the ./controllers module
app.use(routes);

// Sync the Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});