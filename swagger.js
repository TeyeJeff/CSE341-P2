const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Project 2 API',
    description: 'API Documentation for CRUD Operations'
  },
  host: process.env.RENDER_EXTERNAL_HOSTNAME || 'localhost:8080',
  schemes: process.env.RENDER_EXTERNAL_HOSTNAME ? ['https'] : ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);