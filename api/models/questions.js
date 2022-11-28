const Sequelize = require('sequelize');
const db = require('../db');

const Questions = db.define('questions', {

    question_url:{
        type: Sequelize.STRING
    },
    question_comment:{
        type: Sequelize.STRING(10000)
    },

    is_completed:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Questions;