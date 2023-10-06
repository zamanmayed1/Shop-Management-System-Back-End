const {
  getCategoryService,
  createCategoryService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} = require("../services/category.services");

module.exports.getAllCategories = async (req, res, next) => {
  try {
    const result = await getCategoryService();
    res.status(200).json({ status: "Success", count: result.length, result });
  } catch (error) {
    console.error("Error in getAllCategories:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.getCategoryById = async (req, res, next) => {
  try {
    const result = await getCategoryByIdService(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in getCategoryById:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.createCategory = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error("Error in createCategory:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.updateCategory = async (req, res, next) => {
  try {
    const result = await updateCategoryService(req.params.id, req.body);
    if (!result) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in updateCategory:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const result = await deleteCategoryService(req.params.id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Category not found or already deleted" });
    }
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error in deleteCategory:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
