const mongoose = require("mongoose");

const recordsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  sku: String,
  type: String,
  name: String,
  qty: String,
  date: String,
  description: String,
});

const records = mongoose.model("Record", recordsSchema);

module.exports = records;