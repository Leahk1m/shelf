const express = require('express');
const { check } = require('express-validator');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { Business } = require('../../db/models');

const router = express.Router();

const { multiplePublicFileUpload, multipleMulterUpload } = require("../../awsS3")

const validateBusiness = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title')
        .isLength({ min: 4, max: 20 })
        .withMessage('Title must have at least 4 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description')
        .isLength({ min: 10 })
        .withMessage('Description must be at least 10 characters long'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an address')
        .isLength({ min: 10, max: 50 })
        .withMessage('Address must be at least 10 characters long'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a city')
        .isLength({ min: 4, max: 25 })
        .withMessage('City must have at least 4 characters')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Please provide a valid city'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a state')
        .isLength({ min: 4, max: 20 })
        .withMessage('State must have at least 4 characters')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Please provide a valid state'),
    check('zipCode')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a zip code')
        .isInt()
        .isLength({ min: 5, max: 5})
        .withMessage('A valid zip code contains 5 digits'),
    check('category')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a category'),
    handleValidationErrors,

];

router.get('/', asyncHandler(async(_req, res) => {
    const businesses = await Business.findAll();
    return res.json(businesses);
}));

router.post('/', multipleMulterUpload("imageUrls"), validateBusiness, asyncHandler(async(req, res) => {
    const { ownerId, title, description, address, city, state, zipCode, category } = req.body;
    const imageUrls = await multiplePublicFileUpload(req.files);
    const business = await Business.create({
        ownerId,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        category,
        imageUrls,
    });
    res.json(business)
}));

router.put('/edit/:businessId', validateBusiness, asyncHandler(async(req, res) => {
    const id = +req.params.businessId;

    await Business.update(req.body, {
        where: { id },
        returning: true,
        plain: true,
    });
    const business = await Business.findByPk(id);
    return res.json(business);

}));

router.delete('/:businessId', asyncHandler(async(req, res) => {
    const id = +req.params.businessId;
    const business = await Business.findByPk(id);
    if(!business) throw new Error('Cannot find business');

    await Business.destroy({ where: {id: business.id}})
    return res.json({ id: business.id})

}));


module.exports = router;
