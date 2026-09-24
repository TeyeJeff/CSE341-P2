const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.getAllCategories);
router.get('/:id', categoriesController.getSingleCategory);
router.post('/', /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new category',
        required: true,
        schema: { $ref: '#/definitions/CategoryInput' }
} */ categoriesController.createCategory);

router.put('/:id', /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update category',
        required: true,
        schema: { $ref: '#/definitions/CategoryInput' }
} */ categoriesController.updateCategory);
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;