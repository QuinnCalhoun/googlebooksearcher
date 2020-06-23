const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            lowercase: true,
            trim: true,
            required: [true, "can't be blank"],
        },
        author: {
            type: String,
            lowercase: true,
            trim: true,
            required: [true, "can't be blank"],
        },
        description: {
            type: String,
            lowercase: true,
            trim: true,
            required: [true, "can't be blank"],
        },
        image: {
            type: String,
        },
        link: {
            type: String,
            lowercase: true,
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model("Book", BookSchema)