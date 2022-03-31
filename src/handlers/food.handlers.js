const services = require("../services/food.services");

const insertData = async (req, res) => {
  try {
    const resturantAdded = await services.insertResturantDetails();
    res.json({ resturantAdded }).status(200);
  } catch (err) {
    res.json(`There is something wrong ${err}`).status(500);
  }
};

const seeOptions = async (req, res) => {
  try {
    const getAllResturant = await services.getAllResturants();
    res.json({ getAllResturant }).status(200);
  } catch (err) {
    res.json(`There is something wrong ${err}`).status(500);
  }
};

const getResturantDetails = async (req, res) => {
  try {
    const getResturant = await services.getResturantDetails(
      req.params.resturant
    );
    res.json({ getResturant }).status(200);
  } catch (err) {
    res.json(`There is something wrong ${err}`).status(500);
  }
};

const getDishResturants = async (req, res) => {
  try {
    const resturantByDish = await services.getResturantByDish(req.params.dish);
    res.json({ resturantByDish }).status(200);
  } catch (err) {
    res.json(`There is something wrong ${err}`).status(500);
  }
};

module.exports = {
  insertData,
  seeOptions,
  getResturantDetails,
  getDishResturants,
};
