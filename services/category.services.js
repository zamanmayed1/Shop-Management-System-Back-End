const { Category } = require("../models/Category");

module.exports.getCategoryService = async () => {
  const result = await Category.find();
  return result;
};

module.exports.getCategoryByIdService = async (id) => {
  const result = await Category.findById(id);
  return result;
};

module.exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};

module.exports.updateCategoryService = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, data);
  return result;
};

module.exports.deleteCategoryService = async (id) => {
  const result = await Category.deleteOne({ _id: id });
  return result;
};
