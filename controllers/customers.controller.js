const {
    getCustomerService,
    createCustomerService,
    getCustomerByIdService,
    updateCustomerService,
    deleteCustomerService,
  } = require("../services/customer.services");
  
  module.exports.getAllCustomers = async (req, res, next) => {
    try {
      const result = await getCustomerService();
      res.status(200).json({ status: "Success", count: result.length, result });
    } catch (error) {
      console.error("Error in getAllCustomers:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports.getCustomerById = async (req, res, next) => {
    try {
      const result = await getCustomerByIdService(req.params.id);
      if (!result) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Error in getCustomerById:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports.createCustomer = async (req, res, next) => {
    try {
      const result = await createCustomerService(req.body);
      res.status(201).json({ success: true, result });
    } catch (error) {
      console.error("Error in createCustomer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports.updateCustomer = async (req, res, next) => {
    try {
      const result = await updateCustomerService(req.params.id, req.body);
      if (!result) {
        return res.status(404).json({ error: "Customer not found" });
      }
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Error in updateCustomer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports.deleteCustomer = async (req, res, next) => {
    try {
      const result = await deleteCustomerService(req.params.id);
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Customer not found or already deleted" });
      }
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error("Error in deleteCustomer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  