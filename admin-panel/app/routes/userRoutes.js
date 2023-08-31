const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUserList);
router.get('/add', userController.getAddUser);
router.post('/add', userController.postAddUser);
router.get('/:id/edit', userController.getEditUser);
router.post('/:id/edit', userController.postEditUser);
router.get('/:id/delete', userController.deleteUser);

module.exports = router;
