const mongoose = require("mongoose");
const productCategorySchema = new mongoose.Schema({
    name: String,
    desc: String,
    deletedAt: {
        type: Date,
        default: null,
    },
}, { timestamps: true })

const productCategory = mongoose.model("productCategory", productCategorySchema);
module.exports = productCategory