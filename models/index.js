const User = require("./User");
const Rascal = require("./Rascal");
const Limb = require("./Limb");

User.hasOne(Rascal,{
    onDelete: "CASCADE"
});
Rascal.belongsTo(User)

Rascal.hasMany(Limb,{
    onDelete:"CASCADE"
})
Limb.belongsTo(Rascal)
module.exports={
    User,
    Rascal,
    Limb
};