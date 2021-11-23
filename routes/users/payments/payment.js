const express = require('express');
const router = express.Router();
const {getPaymentById, getPayment} = require('./getPayment');

router.get('/getPaymentModes', getPayment);
router.get('/getPaymentModes/:id', getPaymentById);

module.exports = router;
