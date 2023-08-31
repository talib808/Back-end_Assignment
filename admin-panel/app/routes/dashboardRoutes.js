const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const userController = require('../controllers/userController');

// Dashboard
router.get('/', dashboardController.getDashboard);

// User Management
router.get('/users', userController.getUserList); 
router.get('/users/add', userController.getAddUser); 
router.get('/users/edit/:id', userController.getEditUser); 
router.post('/users/delete/:id', userController.deleteUser); 

module.exports = router;

