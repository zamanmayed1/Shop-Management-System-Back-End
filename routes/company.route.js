const express = require("express");
const companyControllers = require("../controllers/company.controller");
const router = express.Router();

router
  .route("/")
  .get(companyControllers.getAllCompanies)
  .post(companyControllers.createCompany);

router
  .route("/:id")
  .get(companyControllers.getCompanyById)
  .patch(companyControllers.updateCompany)
  .delete(companyControllers.deleteCompany);

module.exports = router;
