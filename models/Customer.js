const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required."],
      trim: true,
      minLength: [3, "Please provide a Full Name with at least 3 characters."],
      maxLength: [100, "Full Name should be under 100 characters."],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required."],
      trim: true,
      unique: [true, "Phone Number must be unique."],
      minLength: [10, "Phone Number should be at least 10 characters."],
      maxLength: [15, "Phone Number should be at most 15 characters."],
    },
    address: {
      type: String,
      required: [true, "Address is required."],
      trim: true,
      maxLength: [250, "Address cannot exceed 250 characters."],
    },
    note: {
      type: String,
      maxLength: [250, "Note cannot exceed 250 characters."],
    },
    reference: {
      type: String,
      trim: true,
      maxLength: [100, "Reference should be under 100 characters."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Customer = mongoose.model("Customer", customerSchema);
