const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    desc: String,
    SKU: String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "productCategory",
        required: true
    },
    inventoryId: {
        type: mongoose.Types.ObjectId,
        ref: "productInventory"
    },
    price: String,
    discountId: {
        type: mongoose.Types.ObjectId,
        ref: "productDiscount"
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

// Category Validation in the mongoose
productSchema.path("categoryId").validate({
    validator: async function (value) {
        const category = await mongoose.model("productCategory").findById(value);
        return category !== null;
    },
    message: "Invalid category ID."
});

const product = mongoose.model("product", productSchema);
module.exports = product;
