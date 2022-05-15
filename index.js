const express = require("express");
const app = express();

const logger = require("./logger");

app.get("/", (req, res, next) => {
  const query = req.query;
  const log = JSON.stringify(query);
  logger.info(`Incoming request: ${log}`);
  res.status(200).json("Success");
  logger.info(`Outgoing request: Success`);
});

app.use((err, req, res, next) => {
  logger.error(`Error: ${err}`);
});
app.listen(3000, () => {
  console.log("Is running");
});
