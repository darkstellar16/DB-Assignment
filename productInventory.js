const mongoose = require("mongoose");
const productInventorySchema = new mongoose.Schema({
    quantity: String,
    deletedAt: {
        type: Date,
        default: null
    },

}, { timestamps: true })

const productInventory = mongoose.model("productInventory", productInventorySchema);
module.exports = productInventory