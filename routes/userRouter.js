const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/* differentes load */

//Appel GET
router.get('/read', userController.read);
router.get('/read/:id', userController.read_id);
//Appel POST
router.post('/create', userController.create);
//Appel PUT
router.put('/update/:id', userController.update_id);
//Appel DELETE
router.delete('/delete/:id', userController.delete_id);

module.exports = router;