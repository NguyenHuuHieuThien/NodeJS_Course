const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/handle-form-action', courseController.handleFormAction);
router.get('/edit/:id', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/restore/:id', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/force/:id', courseController.destroy);
router.post('/store', courseController.store);
router.get('/:slug', courseController.showDetail);

module.exports = router;
