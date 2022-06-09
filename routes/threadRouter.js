const express = require('express');
const router = express.Router();

const threadController = require('../controllers/threadController');

/* differentes load */

//Appel GET
router.get('/read', threadController.read);
router.get('/read/:id', threadController.read_id);
//Appel POST
router.post('/create', threadController.create);
router.post('/read/:id/message', threadController.add_new_msg);
router.post('/read/:id/message/:idmessage', threadController.add_new_resp);
//Appel PUT
router.put('/update/:id', threadController.update_id);
//Appel DELETE
router.delete('/delete/:id', threadController.delete_id);

module.exports = router;