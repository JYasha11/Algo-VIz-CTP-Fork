'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User, {foreignKey: 'userId', as: 'user' })
    }
  }
  Question.init({
    name:{
      type:DataTypes.STRING
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    url:{
      type: DataTypes.STRING,
      allowNull: false
    }, 
    comment:{
      type: DataTypes.STRING(500)
    },

    isCompleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    },

    difficulty:{
      type: DataTypes.STRING
    }

    //add difficulties and languages
  }, {
    sequelize,
    tableName:'questions',
    modelName: 'Question',
  });
  return Question;
};