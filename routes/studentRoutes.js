const router = require('express').Router();
const studentController = require('../controllers/studentController')

router.post('/', studentController.create);

router.get('/:id', studentController.get);

router.get('/', studentController.getAll);

router.put('/', studentController.update);

router.delete('/:id', studentController.delete);

router.search('/', studentController.search);

module.exports = router;