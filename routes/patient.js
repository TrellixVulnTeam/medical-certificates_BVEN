var express = require('express');
var router = express.Router();
var patientController = require('../controllers/patientController');


router.get('/add-new', patientController.add_new_patient_get);
router.post('/add-new', patientController.add_new_patient_post);

router.get('/list', (req,res)=> res.render('list-patients'));
router.get('/get-all', patientController.list_patients);

module.exports = router;
