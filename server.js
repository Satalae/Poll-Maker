// Import modules and files
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create a new Express app
const app = express();

// Set the port to listen on
const PORT = process.env.PORT || 3000;

// Session configuration 
const sess = {
  secret: 'your secret key',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Use the session middleware with the session configuration object
app.use(session(sess));

// Parse the incoming JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the routes using the ./controllers module
app.use(routes);

// Sync the Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
