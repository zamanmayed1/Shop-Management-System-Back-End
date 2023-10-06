const Company = require("../models/Company");

module.exports.getCompanyService = async () => {
  const result = await Company.find();
  return result;
};

module.exports.getCompanyByIdService = async (id) => {
  const result = await Company.findById(id);
  return result;
};

module.exports.createCompanyService = async (data) => {
  const result = await Company.create(data);
  return result;
};

module.exports.updateCompanyService = async (id, data) => {
  const result = await Company.updateOne({ _id: id }, data);
  return result;
};

module.exports.deleteCompanyService = async (id) => {
  const result = await Company.deleteOne({ _id: id });
  return result;
};
