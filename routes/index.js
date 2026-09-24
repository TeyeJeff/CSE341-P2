const express = require('express');
const router = express.Router();

// Root route - Welcome / Health Check JSON
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Project 2 REST API',
    documentation: '/api-docs',
    endpoints: {
      categories: '/categories',
      products: '/products'
    }
  });
});

router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
router.use('/', require('./swagger'));

module.exports = router;