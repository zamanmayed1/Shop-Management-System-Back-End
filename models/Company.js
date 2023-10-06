const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      unique: [true, "Name must be unique."],
      minLength: [3, "Please provide a name at least 3 characters."],
      maxLength: [100, "Please provide a name under 100 characters."],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },
    note: {
      type: String,
      maxLength: [500, "Note cannot exceed 500 characters."],
    },
    productList: [
      {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
          },
        name: {
          type: String,
          required: [true, "Product name is required."],
          trim: true,
        },
        price: {
          type: Number,
          required: [true, "Product price is required."],
          min: [0, "Product price cannot be negative."],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);
