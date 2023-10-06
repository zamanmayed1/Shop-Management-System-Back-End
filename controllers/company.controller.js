const {
  getCompanyService,
  getCompanyByIdService,
  createCompanyService,
  updateCompanyService,
  deleteCompanyService,
} = require("../services/Company.services");

module.exports.getAllCompanies = async (req, res, next) => {
  try {
    const result = await getCompanyService();
    res.status(200).json({ status: "Success", count: result.length, result });
  } catch (error) {
    console.error("Error in getAllCompanies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.getCompanyById = async (req, res, next) => {
  try {
    const result = await getCompanyByIdService(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in getCompanyById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.createCompany = async (req, res, next) => {
  try {
    const result = await createCompanyService(req.body);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error("Error in createCompany:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.updateCompany = async (req, res, next) => {
  try {
    const result = await updateCompanyService(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ error: "Company not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in updateCompany:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.deleteCompany = async (req, res, next) => {
  try {
    const result = await deleteCompanyService(req.params.id);
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ error: "Company not found or already deleted" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in deleteCompany:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
