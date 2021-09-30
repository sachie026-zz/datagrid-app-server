const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CustomerSchecma = new Schema({
  name: { type: String },
  due_amount: { type: Number },
  total_products: { type: Number },
  joined_at: { type: Date },
});

module.exports = mongoose.model("Customer", CustomerSchecma);
