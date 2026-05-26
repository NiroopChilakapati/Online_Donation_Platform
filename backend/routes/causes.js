const express = require('express');

const router = express.Router();

const Cause = require('../models/Cause');

/* GET ALL CAUSES */

router.get('/', async (req, res) => {
  try {
    const causes = await Cause.find();

    res.json(causes);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* SEED SAMPLE DATA */

router.get('/seed', async (req, res) => {
  try {
    await Cause.deleteMany();

    const sampleCauses = [
      {
        title: 'Feed Hungry Children',
        category: 'Child Welfare',
        image:
          'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=1200&auto=format&fit=crop',
        description:
          'Help provide meals and nutrition for children in need.',
        target: 50000,
        raised: 32000
      },
      {
        title: 'Old Age Home Support',
        category: 'Old Age Homes',
        image:
          'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
        description:
          'Support elderly people with shelter, food and healthcare.',
        target: 80000,
        raised: 45000
      },
      {
        title: 'Education For Everyone',
        category: 'Education',
        image:
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
        description:
          'Provide books and education materials.',
        target: 60000,
        raised: 40000
      }
    ];

    await Cause.insertMany(sampleCauses);

    res.json({
      message: 'Sample causes inserted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* ADD NEW CAUSE */

router.post('/', async (req, res) => {
  try {
    const newCause = new Cause({
      title: req.body.title,
      category: req.body.category,
      image: req.body.image,
      description: req.body.description,
      target: req.body.target,
      raised: req.body.raised || 0
    });

    const savedCause = await newCause.save();

    res.status(201).json(savedCause);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* UPDATE CAUSE */

router.put('/:id', async (req, res) => {
  try {
    const updatedCause = await Cause.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        category: req.body.category,
        image: req.body.image,
        description: req.body.description,
        target: req.body.target
      },
      { new: true }
    );

    res.json(updatedCause);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/* DELETE CAUSE */

router.delete('/:id', async (req, res) => {
  try {
    await Cause.findByIdAndDelete(req.params.id);

    res.json({
      message: 'Cause deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;