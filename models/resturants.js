"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resturants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Menus }) {
      Resturants.hasMany(Menus, {
        foreignKey: "id",
      });
      // define association here
    }
  }
  Resturants.init(
    {
      fullName: DataTypes.STRING,
      costForTwo: DataTypes.INTEGER,
      Location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Resturants",
    }
  );
  return Resturants;
};
