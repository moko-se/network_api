const express = require('express');
const router = express.Router();

const groupController = require('../controllers/groupController');

/* differentes load */

//Appel GET
router.get('/read', groupController.read);
router.get('/read/:id', groupController.read_id);
//Appel POST
router.post('/create', groupController.create);
router.post('/read/:id/menber', groupController.add_new_member);
router.post('/read/:id/event', groupController.add_new_event);
//Appel PUT
router.put('/update/:id', groupController.update_id);
//Appel DELETE
router.delete('/delete/:id', groupController.delete_id);

module.exports = router;