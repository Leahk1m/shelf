const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a first name.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a last name.'),
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
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
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password} = req.body;
    const user = await User.signup({ firstName, lastName, email, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

module.exports = router;
