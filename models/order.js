const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

/*eslint-disable*/
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegexp = /^\+?(\d{1,3})?[ -]?\(?\d{1,3}\)?[ -]?\d{1,4}[ -]?\d{1,4}[ -]?\d{1,9}$/;
/*eslint-disable*/

const orderSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    order: {
      type: [
        {
          _id: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post('save', handleMongooseError);

const orderJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  address: Joi.string().required(),
  order: Joi.array()
    .items(
      Joi.object({
        _id: Joi.string().required(),
        amount: Joi.number().required(),
      })
    )
    .required(),
});

const Order = model('order', orderSchema);

module.exports = {
  Order,
  orderJoiSchema,
};
