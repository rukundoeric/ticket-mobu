/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import Joi from '@hapi/joi';

const schemas = {};

const userId = Joi.string()
  .trim()
  .required()
  .regex(/^[A-Za-z_-]+$/)
  .min(2)
  .label('User Id is Required');
const password = Joi.string()
  .trim()
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
  .required()
  .label(
    'Password is required and must be at least 8 letters containing at least a number a Lowercase letter and an Uppercase letter'
  );
const image = Joi.string()
  .trim()
  .required()
  .min(3)
  .label('Image is required, it must be url or default test');
const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .label('Email is required and should look like this : example@email.com!');

schemas.createUser = Joi.object().keys({
  firstName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z_-]+$/)
    .min(3)
    .label(
      "First name is required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
    ),
  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z_.-]+$/)
    .min(3)
    .label(
      "Last name is required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
    ),
  email,
  phone: Joi.string()
    .min(3)
    .required()
    .label(
      "Phone is required,  it must have at least 3 letters and must contain only letters"
    ),
  role: Joi.string()
    .valid("admin", "moderator")
    .required()
    .label("Role is required, it must be admin or moderator"),
});

export default schemas;
