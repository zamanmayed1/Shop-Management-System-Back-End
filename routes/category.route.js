const express = require("express");
const categoriesController = require("../controllers/categories.controller");
const router = express.Router();

router
  .route("/")
  .get(categoriesController.getAllCategories)
  .post(categoriesController.createCategory);

router
  .route("/:id")
  .get(categoriesController.getCategoryById)
  .patch(categoriesController.updateCategory)
  .delete(categoriesController.deleteCategory);

module.exports = router;
