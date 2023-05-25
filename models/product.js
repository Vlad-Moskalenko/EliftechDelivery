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
    descr: {
      type: String,
      default: 'Lorem ipsum dolor sit am',
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
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
