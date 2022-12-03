'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      // define association here
      this.hasMany(Question, {foreignKey:'userId', as:'questions'})
    }
    toJSON(){
      return{...this.get(), id : undefined }
    }
  }
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {msg: 'User must have a name'},
        notEmpty: {msg: 'Name must not be empty'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  return User;
};