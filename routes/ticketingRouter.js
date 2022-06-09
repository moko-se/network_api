const express = require('express');
const router = express.Router();

const ticketingController = require('../controllers/ticketingController');

/* differentes load */

//Appel GET
router.get('/read', ticketingController.read);
router.get('/read/:id', ticketingController.read_id);
//Appel POST
router.post('/create/:eventid', ticketingController.create);
//Appel PUT
router.put('/update/:id', ticketingController.update_id);
//Appel DELETE
router.delete('/delete/:id', ticketingController.delete_id);

module.exports = router;