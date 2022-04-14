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

router.put('/edit/:businessId', asyncHandler(async(req, res) => {
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
