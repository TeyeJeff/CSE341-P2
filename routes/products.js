const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getSingleProduct);
router.post('/', /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new product',
        required: true,
        schema: { $ref: '#/definitions/ProductInput' }
} */ productsController.createProduct);

router.put('/:id', /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update product',
        required: true,
        schema: { $ref: '#/definitions/ProductInput' }
} */ productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;