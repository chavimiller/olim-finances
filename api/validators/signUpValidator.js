const { body } = require("express-validator");

const validateUser = [
  body("email")
    .trim()
    .normalizeEmail()
    .notEmpty()
    .withMessage("Email is a required field")
    .isEmail()
    .withMessage("Must be a valid email."),

  body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Name is a required field.")
    .isLength({ min: 1, max: 50 })
    .withMessage("Name must be between 1 and 50` characters"),

  body("password")
    .notEmpty()
    .withMessage("Password is a required field.")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 10 characters."),
];

module.exports = validateUser;
