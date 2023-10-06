const  mongoose  = require("mongoose");

const categorySchema = mongoose.Schema(
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
     
      note: {
        type: String,
        maxLength: [500, "Note cannot exceed 500 characters."],
      },
     
    },
    {
      timestamps: true,
    }
  );


  
module.exports.Category = mongoose.model("Category", categorySchema);
  