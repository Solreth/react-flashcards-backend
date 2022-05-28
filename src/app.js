const express = require("express");
const cardsRouter = require("./cards/cards.router");
const decksRouter = require("./decks/decks.router");

const app = express();

app.use(express.json());

// add routes here
app.use("/cards", cardsRouter);
app.use("/decks", decksRouter);

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
