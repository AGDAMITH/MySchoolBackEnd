const router = require('express').Router();
const teacherController = require('../controllers/teacherController')

router.post('/', teacherController.create);

router.get('/:id', teacherController.get);

router.get('/', teacherController.getAll);

router.put('/', teacherController.update);

router.delete('/:id', teacherController.delete);

module.exports = router ;