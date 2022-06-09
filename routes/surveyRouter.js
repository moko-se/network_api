const express = require('express');
const router = express.Router();

const surveyController = require('../controllers/surveyController');

/* differentes load */

//Appel GET
router.get('/read', surveyController.read);
router.get('/read/:id', surveyController.read_id);
//Appel POST
router.post('/create/:eventid', surveyController.create);
router.post('/create/:id/question', surveyController.add_new_question);
router.post('/create/:id/question/:questionid', surveyController.add_new_answer);
//Appel PUT
router.put('/update/:id', surveyController.update_id);
//Appel DELETE
router.delete('/delete/:id', surveyController.delete_id);

module.exports = router;