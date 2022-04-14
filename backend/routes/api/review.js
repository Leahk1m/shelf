const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(_req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
}));



module.exports = router;
