const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ project: 'codr' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ project: 'bestFit' });
});

module.exports = router;
