/* eslint-disable linebreak-style */
import { v4 as userId } from "uuid";
import dotenv from 'dotenv';
import { hashPassword } from '../../helpers';

dotenv.config();

const {
  SUPER_ADMIN_FIRSTNAME,
  SUPER_ADMIN_LASTNAME,
  SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PHONE,
  SUPER_ADMIN_PASSWORD,
} = process.env;

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      "users",
      [
        {
          userId: userId(),
          firstName: SUPER_ADMIN_FIRSTNAME,
          lastName: SUPER_ADMIN_LASTNAME,
          email: SUPER_ADMIN_EMAIL,
          phone: SUPER_ADMIN_PHONE,
          password: await hashPassword(SUPER_ADMIN_PASSWORD),
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),
};
