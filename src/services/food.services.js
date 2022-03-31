const models = require("../../models");

const getAllResturants = async () => {
  const resturants = await models.Resturants.findAll({
    attributes: ["id", "fullName", "costForTwo", "Location"],
  });

  return resturants;
};

const getResturantMenu = async (resturantId) => {
  const resturantMenu = await models.Menus.findAll({
    attributes: ["name", "price", "rating"],
    where: { resturant_id: resturantId },
  });

  return resturantMenu;
};

const getResturantByDish = async (dish) => {
  if (!dish) {
    throw new Error("Invalid, Dish name must be given!!");
  }
  if (typeof dish !== "string") {
    throw new Error("Invalid, Dish must only contain alphabets!!");
  }

  const resturants = await models.Menus.findAll({
    where: { name: dish },
    include: {
      model: models.Resturants,
      attributes: ["id", "fullName", "costForTwo", "Location"],
    },
  });

  if (!resturants) {
    throw new Error("Sorry No resturant has this dish");
  }

  const allResturant = resturants.map((resturant) => resturant.Resturant);
  return allResturant;

  //return resturants;
};

module.exports = {
  getAllResturants,
  getResturantMenu,
  getResturantByDish,
};
