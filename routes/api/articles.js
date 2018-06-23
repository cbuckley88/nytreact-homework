const router = require("express").Router();
const articlesController = require("../../controllers/article");


router.route("/")
    .get(articlesController.find)
    .post(articlesController.add);

router
    .route("/:id")
    .put(articlesController.update)
    .delete(articlesController.remove);


module.exports = router;