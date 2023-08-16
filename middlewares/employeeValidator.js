const { body, validationResult } = require('express-validator');

exports.employeeValidator = [
  body('name').trim().not().isEmpty().withMessage('Name is required').bail(),
  body('sectors')
    .custom((value) => {
      if (Array.isArray(value) && value.length === 0) {
        throw new Error('Sectors must not be empty');
      }
      return true;
    })
    .bail(),
  body('terms')
    .isBoolean()
    .withMessage('Terms must be agreed')
    .custom((value) => {
      if (value !== true) {
        throw new Error('Terms must be agreed');
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = {};
      errors.array().forEach((elem) => {
        err[elem.path] = elem.msg;
      });
      return res.status(422).json({ success: false, err });
    }
    next();
  },
];
