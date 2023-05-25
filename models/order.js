const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    required: true,
  },
});

orderSchema.post('save', handleMongooseError);

const Order = model('order', orderSchema);

module.exports = Order;
