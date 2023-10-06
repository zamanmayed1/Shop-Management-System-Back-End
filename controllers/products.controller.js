const {
  getProductService,
  postAProductService,
  getAProductByIdService,
  updateAProductService,
  deleteAProductService,
} = require("../services/product.services");

module.exports.getAllProduct = async (req, res, next) => {
  try {
    const result = await getProductService();
    res.status(200).json({ status: "Success", count: result.length, result });
  } catch (error) {
    console.error("Error in getAllProduct:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.getAProductById = async (req, res, next) => {
  try {
    const result = await getAProductByIdService(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in getAProductById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.postAProduct = async (req, res, next) => {
  try {
    const result = await postAProductService(req.body);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error("Error in postAProduct:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.updateAProduct = async (req, res, next) => {
  try {
    const result = await updateAProductService(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in updateAProduct:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.deleteAProduct = async (req, res, next) => {
  try {
    const result = await deleteAProductService(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found or already deleted" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in deleteAProduct:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
