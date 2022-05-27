const User = require("./User");
const comment = require("./comment");

User.hasMany(comment);
comment.belongsTo(User)


module.exports = {
    User,
    comment
}