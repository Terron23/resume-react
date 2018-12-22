const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const resume_controller = require('../controllers/resume.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', resume_controller.test);

router.post('/create', resume_controller.resume_create);

router.get('/:id', resume_controller.resume_details);

module.exports = router;