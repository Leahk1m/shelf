const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { Review } = require('../../db/models');

const router = express.Router();

const validateReview = [
    // check('firstName')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Please provide your first name')
    //     .isLength({ min: 3, max: 20 })
    //     .withMessage('First name must be at least 3 characters long'),
    // check('lastName')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Please provide your last name')
    //     .isLength({ min: 3, max: 20 })
    //     .withMessage('Last name must be at least 3 characters long'),
    // check('profilePhoto')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Please provide a profile photo')
    //     .isURL({ require_protocol: false, require_host: false })
    //     .withMessage('Please input a proper url for your profile photo')
        check('rating')
            .exists({ checkFalsy: true })
            .withMessage('Please provide a rating')
            .isInt({ min: 1, max: 5})
            .withMessage('Rating must be between 1-5'),
        check('post')
            .exists({ checkFalsy: true })
            .withMessage('Please provide context for your review')
            .isLength({ min: 10 })
            .withMessage('Your review must have at least 10 characters'),
        handleValidationErrors,
];

router.get('/', asyncHandler(async(_req, res) => {
    const reviews = await Review.findAll();
    return res.json(reviews);
}));

router.post('/', validateReview,asyncHandler(async(req, res) => {
    const details = req.body;
    const review = await Review.create(details);
    res.json(review)

}));

router.put('/edit/:reviewId', validateReview, asyncHandler(async(req, res) => {
    const id = +req.params.reviewId;

    await Review.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });
    const review = await Review.findByPk(id);
    return res.json(review);
}));

router.delete('/:reviewId', asyncHandler(async(req, res) => {
    const id = +req.params.reviewId;
    const review = await Review.findByPk(id);
    if(!review) throw new Error('Cannot find review');

    await Review.destroy({ where: {id: review.id }})
    return res.json({ id: review.id })
}));



module.exports = router;
