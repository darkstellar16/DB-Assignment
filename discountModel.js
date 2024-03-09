const mongoose = require("mongoose");
const productDiscountSchema = new mongoose.Schema({
    name: String,
    desc: String,
    discountPercent: String,
    active: String,
    deletedAt: {
        type: Date,
        default: null,
    },
}, { timestamps: true })

const productDiscount = mongoose.model("productDiscount", productDiscountSchema);
module.exports = productDiscount