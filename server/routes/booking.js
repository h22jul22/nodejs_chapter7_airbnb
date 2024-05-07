const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { createBookings, getBookings } = require('../controllers/bookingController');

router.route('/').post(isLoggedIn, createBookings);

router.route('/').get(isLoggedIn, getBookings);

module.exports = router;
