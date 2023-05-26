const Order = require('../models/order');
const { ctrlWrapper } = require('../helpers');

const getClientOrders = async (req, res) => {
  const { phone } = req.query;

  const orders = await Order.find({ phone });

  res.status(200).json(orders);
};

const createOrder = async (req, res) => {
  const order = await Order.create(req.body);

  res.status(201).json(order);
};

module.exports = {
  getClientOrders: ctrlWrapper(getClientOrders),
  createOrder: ctrlWrapper(createOrder),
};
