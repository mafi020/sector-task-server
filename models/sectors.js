const { Schema, model } = require('mongoose');

const secotrSchema = new Schema(
  {
    name: String,
  },
  { versionKey: false }
);

module.exports = model('Sector', secotrSchema);
