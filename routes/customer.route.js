const express = require("express");
const customersController = require("../controllers/customers.controller");
const router = express.Router();

router
  .route("/")
  .get(customersController.getAllCustomers)
  .post(customersController.createCustomer);

router
  .route("/:id")
  .get(customersController.getCustomerById)
  .patch(customersController.updateCustomer)
  .delete(customersController.deleteCustomer);

module.exports = router;
