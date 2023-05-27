const Product = require('../models/product');

const { httpError, ctrlWrapper } = require('../helpers');

const getProducts = async (req, res) => {
  const products = await Product.find();

  if (!products) {
    httpError(404);
  }

  res.status(200).json(products);
};

const getMarketProducts = async (req, res) => {
  const { market } = req.params;

  const products = await Product.find({ market });

  if (!products) {
    httpError(404);
  }

  res.status(200).json(products);
};

const getMarkets = async (req, res) => {
  const marketsList = await Product.find({}, 'market -_id');

  if (!marketsList) {
    httpError(404);
  }

  const markets = new Set(marketsList.map(item => item.market));

  res.status(200).json([...markets]);
};

module.exports = {
  getProducts: ctrlWrapper(getProducts),
  getMarkets: ctrlWrapper(getMarkets),
  getMarketProducts: ctrlWrapper(getMarketProducts),
};
