const router = require("express").Router();
const bookController = require("../controllers/bookcontroller")

router
    .route("/api/books")
    .get(bookController.findAll)
    .post(bookController.create)

router
    .route("/api/books/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);
router
    .route('/api/books/:title')
    .get(bookController.findByName)

module.exports = router