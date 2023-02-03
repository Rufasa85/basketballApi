const Team = require("./Team");
const Player = require("./Player");
const User = require("./User");

Team.hasMany(Player);
Player.belongsTo(Team);

module.exports = {
    Player,
    Team,
    User
}