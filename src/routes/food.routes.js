const express = require("express");
const foodHandler = require("../handlers/food.handlers");

const foodRouter = express.Router();

foodRouter.get("/insertData", foodHandler.insertData);
foodRouter.get("/seeOptions", foodHandler.seeOptions);
foodRouter.get("/seeOptions/:resturant", foodHandler.getResturantDetails);
foodRouter.get("/searchOption/:dish", foodHandler.getDishResturants);

module.exports = {
  foodRouter,
};
