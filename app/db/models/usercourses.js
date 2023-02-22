'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCourses.init({
    user: DataTypes.INTEGER,
    course: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCourses',
  });
  return UserCourses;
};