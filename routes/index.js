const express    = require('express');
const router = express.Router();

router.use('/student',require('./studentRoutes'));

router.use('/teacher',require('./teacherRoutes'));

module.exports = router;