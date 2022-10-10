const express = require('express');
const router = express.Router();
const {getSubscribe, createSubscribe} = require('./../controllers/subscribeController');

router.route('/').get(getSubscribe).post(createSubscribe);


module.exports = router