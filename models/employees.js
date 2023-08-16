const { Schema, model } = require('mongoose');

const employeeSchema = new Schema(
  {
    name: String,
    sectors: Array,
    terms: Boolean,
  },
  { versionKey: false }
);

module.exports = model('Employee', employeeSchema);
