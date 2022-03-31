const express = require("express");
const { healthHandler } = require("../handlers/health.handlers");

const healthRouter = express.Router();

healthRouter.get("/", healthHandler);

module.exports = {
  healthRouter,
};
