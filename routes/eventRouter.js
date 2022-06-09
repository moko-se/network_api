const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

/* differentes load */

//Appel GET
router.get('/read', eventController.read);
router.get('/read/:id', eventController.read_id);
//Appel POST
router.post('/create', eventController.create);
router.post('/read/:id/menber', eventController.add_new_member);
router.post('/read/:id/message', eventController.add_new_message);
router.post('/read/:id/message/response', eventController.add_new_response_message);
//Appel PUT
router.put('/update/:id', eventController.update_id);
//Appel DELETE
router.delete('/delete/:id', eventController.delete_id);

module.exports = router;