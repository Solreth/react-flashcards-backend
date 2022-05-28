const cardsData = require("../data/cards-data");

function list(req, res, next) {
  const { deckId, cardId } = req.params;
  let cards = cardsData;

  console.log("deckId", deckId);
  console.log("cardId", cardId);

  if (deckId) {
    cards = cardsData.filter((card) => card.deckId === Number(deckId));
  }

  if (cardId) {
    cards = cardsData.filter((card) => card.id === Number(cardId));
  }

  // const cards = cardsData.filter(
  //   deckId ? (card) => card.deckId === Number(deckId) : () => true
  // );

  res.json({ data: cards });
}

module.exports = {
  list,
};
