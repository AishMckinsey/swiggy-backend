"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Resturants }) {
      // define association here

      Menus.belongsTo(Resturants, {
        onDelete: "cascade",
        foreignKey: "resturant_id",
      });
    }
  }
  Menus.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Menus",
    }
  );
  return Menus;
};
