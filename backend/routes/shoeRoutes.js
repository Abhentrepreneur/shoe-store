const express = require('express');
const { getShoes } = require('../controllers/shoeController');
const router = express.Router();

router.get('/', getShoes);

module.exports = router;
