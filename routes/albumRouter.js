const express = require('express');
const router = express.Router();

const albumController = require('../controllers/albumController');

/* differentes load */

//Appel GET
router.get('/read', albumController.read);
router.get('/read/:id', albumController.read_id);
//Appel POST
router.post('/create/:eventid', albumController.create);
//Appel PUT
router.put('/update/:id', albumController.update_id);
//Appel DELETE
router.delete('/delete/:id', albumController.delete_id);

module.exports = router;