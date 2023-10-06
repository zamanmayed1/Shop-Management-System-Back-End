const express = require("express");
const productsController = require("../controllers/products.controller");
const router = express.Router();

router
  .route("/")
  .get(productsController.getAllProduct)
  .post(productsController.postAProduct);

router
  .route("/:id")
  .get(productsController.getAProductById)
  .patch(productsController.updateAProduct)
  .delete(productsController.deleteAProduct);

module.exports = router;
