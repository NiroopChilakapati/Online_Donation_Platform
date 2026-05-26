const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    causeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cause',
      required: true
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },

    donorName: {
      type: String,
      required: true
    },

    donorEmail: {
      type: String,
      required: true
    },

    amount: {
      type: Number,
      required: true
    },

    paymentId: {
      type: String,
      required: true
    },

    orderId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Donation', donationSchema);