const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/products');

router.get('/', ctrl.getProducts);

router.get('/markets', ctrl.getMarkets);

router.get('/:market', ctrl.getMarketProducts);

module.exports = router;
