const Users = require('./users');
const Questions = require('./questions');

Users.hasMany(Questions);
Questions.belongsTo(Users);

module.exports = {Users, Questions};