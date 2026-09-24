const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Project 2 REST API',
    description: 'API Documentation for Products and Categories'
  },
  host: process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost:8080',
  schemes: process.env.RENDER_EXTERNAL_HOSTNAME ? ['https'] : ['http'],
  definitions: {
    CategoryInput: {
      name: 'Electronics',
      slug: 'electronics',
      description: 'Tech hardware and gadgets',
      isActive: true
    },
    ProductInput: {
      name: 'Wireless Mouse',
      sku: 'MOUSE-101',
      category: '66f2a1b3c4e5f67890123456',
      price: 29.99,
      stockQuantity: 50,
      inStock: true,
      description: 'Ergonomic wireless mouse',
      tags: ['computer', 'accessories']
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);