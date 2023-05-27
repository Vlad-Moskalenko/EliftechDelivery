const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    market: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post('save', handleMongooseError);

const Product = model('product', productSchema);

module.exports = Product;
