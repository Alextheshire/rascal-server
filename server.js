const express = require('express');
const sequelize = require("./config/connection.js")
const app = express();
const PORT = process.env.PORT || 3005;
const cors = require("cors");


const routes = require("./controllers");
const {User, Rascal, EquippedItem,UnlockedItem} = require('./models');
//LOCAL
app.use(cors())
//DEPLOYED
// app.use(cors({
//     origin:["deployedreactappnotrailingslash"]
// }))
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
    });
});
sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(function() {
    sequelize
        .sync({
            force: true
        }).then(function() {
            sequelize.query('SET FOREIGN_KEY_CHECKS = 1').then(function() {
                console.log('Database synchronised.');
            });
        }).catch(function(err) {
            console.log(err);
        });;
}).catch(function(ee) {
    console.log(err);
});