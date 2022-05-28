const decksData = require("../data/decks-data");

function hasDeck(req, res, next) {
  const { deckId } = req.params;
  const foundDeck = decksData.find((deck) => deck.id === Number(deckId));

  if (foundDeck) {
    res.locals.deck = foundDeck;
    return next();
  }

  next({
    status: 404,
    message: `Deck id not found: ${deckId}`,
  });
}

module.exports = {
  hasDeck,
};
