const router = require("express").Router({ mergeParams: true });
const controller = require("./cards.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// routes
router.route("/:cardId").get(controller.list).all(methodNotAllowed);
router.route("/:deckId").get(controller.list).all(methodNotAllowed);
router.route("/").get(controller.list).all(methodNotAllowed);

module.exports = router;
