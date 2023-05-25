const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/orders');

router.get('/', ctrl.getClientOrders);

router.post('/', ctrl.createOrder);

module.exports = router;
