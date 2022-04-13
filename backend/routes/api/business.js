const express = require('express');
const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(_req, res) => {
    const businesses = await Business.findAll();
    return res.json(businesses);
}));

router.post('/', asyncHandler(async(req, res) => {
    const details = req.body;
    const business = await Business.create(details);
    res.json(business)
}));



module.exports = router;
