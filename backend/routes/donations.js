const express = require('express');

const router = express.Router();

const Donation = require('../models/Donation');
const Cause = require('../models/Cause');

/* SAVE DONATION */

router.post('/', async (req, res) => {
  try {
    const {
      causeId,
      userId,
      donorName,
      donorEmail,
      amount,
      paymentId,
      orderId
    } = req.body;

    const donation = await Donation.create({
      causeId,
      userId,
      donorName,
      donorEmail,
      amount,
      paymentId,
      orderId
    });

    await Cause.findByIdAndUpdate(causeId, {
      $inc: {
        raised: amount
      }
    });

    res.status(201).json({
      message: 'Donation saved successfully',
      donation
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* GET ALL DONATIONS - ADMIN */

router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate('causeId')
      .populate('userId');

    res.json(donations);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* GET USER DONATIONS */

router.get('/user/:userId', async (req, res) => {
  try {
    const donations = await Donation.find({
      userId: req.params.userId
    })
      .populate('causeId')
      .populate('userId');

    res.json(donations);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;