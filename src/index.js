const express = require("express");
const env = require("dotenv");

const { healthRouter } = require("./routes/health.routes");
const { foodRouter } = require("./routes/food.routes");

env.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/health", healthRouter);
app.use("/swiggy", foodRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
