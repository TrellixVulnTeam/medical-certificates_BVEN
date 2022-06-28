var express = require('express');
var router = express.Router();
var examinationController = require('../controllers/examinationController');

/* GET home page. */
router.get('/add-new', examinationController.add_new_examination_get);
router.post('/add-new', examinationController.add_new_examination_post);

module.exports = router;
