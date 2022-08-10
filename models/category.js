const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
    { 
        // id: {
        // type: Number,
        // trim: true,
        // required: true,
        // maxlength: 32,
        // unique: true
        // },
        name: {
            type: String,
            trim: true,
            required: true,
            // maxlength: 32,
          
        },
        price:{
            type: Number,
            trim: true,
            required: true,
            maxlength: 32,
           
        },
        subscriptionTime:{
            type: Date,
            trim: true,
            required: true,
            maxlength: 32,
          
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
