const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.get('/checkout', paymentController.getCheckoutPage);
router.post('/create-subscription', paymentController.createSubscription);
router.post('/webhook', paymentController.handleWebhook);

module.exports = router;
