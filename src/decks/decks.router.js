const router = require("express").Router({ mergeParams: true });
const controller = require("./decks.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cardsRouter = require("../cards/cards.router");

router.use("/:deckId/cards", controller.hasDeck, cardsRouter);

module.exports = router;
