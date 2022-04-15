const express = require('express');
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async(_req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
}));

router.post('/', asyncHandler(async(req, res) => {
    const details = req.body;
    const review = await Review.create(details);
    res.json(review)

}));

router.put('/edit/:reviewId', asyncHandler(async(req, res) => {
    const id = +req.params.reviewId;

    await Review.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });
    const review = await Review.findByPk(id);
    return res.json(review);
}));



module.exports = router;
