const { Customer } = require("../models/Customer");

module.exports.getCustomerService = async () => {
  const result = await Customer.find();
  return result;
};

module.exports.getCustomerByIdService = async (id) => {
  const result = await Customer.findById(id);
  return result;
};

module.exports.createCustomerService = async (data) => {
  const result = await Customer.create(data);
  return result;
};

module.exports.updateCustomerService = async (id, data) => {
  const result = await Customer.updateOne({ _id: id }, data);
  return result;
};

module.exports.deleteCustomerService = async (id) => {
  const result = await Customer.deleteOne({ _id: id });
  return result;
};
