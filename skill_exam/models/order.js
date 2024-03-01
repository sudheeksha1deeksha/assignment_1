// models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Order', orderSchema);
