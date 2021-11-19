const express = require('express');
const sequelize = require("./config/connection.js")
const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3005;



const routes = require("./controllers");
const {User} = require('./models');

app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new SequelizeStore({
        db: sequelize
    })
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });
});