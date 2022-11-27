const Sequelize = require('sequelize');
const crypto = require('crypto');
const db  = require('../db');

const Users = db.define('Users', {
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },
    password:{
        type: Sequelize.STRING,

    },
    salt:{
        type: Sequelize.STRING,
  
    }

});
Users.prototype.correctPassword = function(enteredPassword) {
    return Users.encryptPassword(enteredPassword, this.salt) === this.password
}
Users.generateSalt = function() {
    return crypto.randomBytes(16).toString('base64')
}
Users.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash('RSA-SHA256')
        .update(plainText)
        .update(salt)
        .digest('hex')
}
const setSaltAndPassword = user => {
    if (user.changed('password')) {
        user.salt = Users.generateSalt()
        user.password = Users.encryptPassword(user.password, user.salt)
    }
}
Users.beforeCreate(setSaltAndPassword)
Users.beforeUpdate(setSaltAndPassword)

module.exports = Users;