const  mongoose  = require("mongoose");

const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        unique: [true, "Name must be unique."],
        minLength: [3, "Please provide a name at least 3 characters."],
        maxLength: [100, "Please provide a name under 100 characters."],
      },
      slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
      },
      buyPrice: {
        type: Number,
        required: [true, "Buy Price is required."],
        min: [0, "Buy Price cannot be negative."],
      },
      salePrice: {
        type: Number,
        required: [true, "Sale Price is required."],
        min: [0, "Sale Price cannot be negative."],
      },
      note: {
        type: String,
        maxLength: [500, "Note cannot exceed 500 characters."],
      },
      stock: {
        type: Number,
        required: [true, "Stock is required."],
        min: [0, "Stock cannot be negative."],
      },
      sold: {
        type: Number,
        default: 0,
        min: [0, "Sold count cannot be negative."],
      },
      returnedCount: {
        type: Number,
        default: 0,
        min: [0, "Returned count cannot be negative."],
      },
      category: {
        name: {
          type: String,
          required: [true, "Category name is required."],
          trim: true,
        },
        _id: {
          type: mongoose.Schema.Types.ObjectId,
        },
      },
      status: {
        type: String,
        required: [true, "Status Price is required."],
        enum: {
          values: ["in-shop", "sold-out"],
          message: "Status {VALUE} Not Allowed.",
        },
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
    },
    {
      timestamps: true,
    }
  );


  
module.exports.Product = mongoose.model("Product", productSchema);
  