const User = require("./User");
const Rascal = require("./Rascal");

User.hasOne(Rascal,{
    onDelete: "CASCADE"
});
Rascal.belongsTo(User)

module.exports={
    User,
    Rascal
};