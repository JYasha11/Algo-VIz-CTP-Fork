const Sequelize = require('sequelize');
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
    }

});

module.exports = Users;