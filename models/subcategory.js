const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const subCategorySchema = new mongoose.Schema(
    { 
        id: {
        type: Number,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    },
    name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
      //      unique: true
        }, 
        category: {
            type: ObjectId, 
            ref: "Category",
             required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
