const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/orders');
const { validateBody } = require('../../middlewares');
const { orderJoiSchema } = require('../../models/order');

router.post('/', validateBody(orderJoiSchema), ctrl.createOrder);

module.exports = router;
