const express = require('express');
const router = express.Router();

const RegistrationController = require('../controllers/registrationController');
const registrationController = new RegistrationController();

// Define your routes below
router.post('/school', registrationController.registerSchool);
router.post('/college', registrationController.registerCollege);
router.post('/exam-center', registrationController.registerExamCenter);

module.exports = router;