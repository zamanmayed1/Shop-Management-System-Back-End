const { Product } = require("../models/Product");

module.exports.getProductService = async () => {
  const result = await Product.find();
  return result;
};
module.exports.getAProductByIdService = async (id) => {
  const result = await Product.findById(id);
  return result;
};

module.exports.postAProductService = async (data) => {
  const result = await Product.create(data);
  return result;
};

module.exports.updateAProductService = async (id, data) => {
  const result = await Product.updateOne({ _id: id }, data);
  return result;
};
module.exports.deleteAProductService = async (id) => {
  const result = await Product.deleteOne({_id : id})
  return result;
};
