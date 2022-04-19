const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const validateSignup = [
  check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your first name')
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be at least 3 characters long')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Please provide a valid first name'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide your last name')
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be at least 3 characters long')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Please provide a valid last name'),
    // check('profilePhoto')
    //     .exists({ checkFalsy: true })
    //     .withMessage('Please provide a profile photo')
    //     .isURL({ require_protocol: false, require_host: false })
    //     .matches(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)
    //     .withMessage('Please input a proper url for your profile photo'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a city')
        .isLength({ min: 4, max: 25 })
        .withMessage('City must have at least 4 characters')
        .matches(/^[A-Za-z\s]+$/)
        .withMessage('Please provide a valid city'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email'),
  // check('username')
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 4 })
  //   .withMessage('Please provide a username with at least 4 characters.'),
  // check('username')
  //   .not()
  //   .isEmail()
  //   .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or longer'),
    handleValidationErrors,
];

// Sign up
router.post(
  '',
  singleMulterUpload('profilePhoto'),
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, city, email, password} = req.body;
    const profilePhoto = await singlePublicFileUpload(req.file);
    const user = await User.signup({ firstName, lastName, profilePhoto, city, email, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

module.exports = router;
