const User = require("./User");
const Rascal = require("./Rascal");
const EquippedItem = require("./Equip");
const UnlockedItem = require("./Unlock")

User.hasOne(Rascal,{
    onDelete: "CASCADE"
});
Rascal.belongsTo(User)

Rascal.hasMany(EquippedItem,{
    onDelete:"CASCADE"
})
EquippedItem.belongsTo(Rascal)

Rascal.hasMany(UnlockedItem,{
    onDelete:"CASCADE"
})
UnlockedItem.belongsTo(Rascal)
module.exports={
    User,
    Rascal,
    EquippedItem,
    UnlockedItem
};