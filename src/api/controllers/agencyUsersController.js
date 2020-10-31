/* eslint-disable linebreak-style */
import { v4 as userId } from "uuid";
import pswGenerator from 'generate-password';
import models from "../../sequelize/models";
import { hashPassword } from "../../helpers";

const { agency_users:users } = models;

/**
 * @Author - Eric prestein
 */
class agencyUserController {
  /**
   * creating a new user
   * @param {object} req - Request.
   * @param {object} res - Response.
   * @returns {object} - returns created user
   */
  static async createAgencyUser(req, res) {
    const { firstName, lastName, email, phone, role, agency_id } = req.body;
    let psw = pswGenerator.generate({
      length: 10,
      numbers: true,
      uppercase: true,
    });
    console.log(psw);
    const password = await hashPassword(psw);
    const { dataValues } = await users.create({
      id: userId(),
      firstName,
      lastName,
      email,
      phone,
      role,
      agency_id,
      password,
    });
    return res.status(201).json({
      status: 201,
      data: {
        message: "User created successfully",
        user: dataValues,
      },
    });
  }


  /**
   * Get all users
   * @param {object} req - Request.
   * @param {object} res - Response.
   * @returns {object} - returns created user
   */
  static async getAgencyUsers(req, res) {
    const users = await users.findAll({});
    return res.status(200).json({
      status: 200,
      users,
    });
  }

  /**
   * Get specific user
   * @param {object} req - Request.
   * @param {object} res - Response.
   * @returns {object} - returns created user
   */
  static async getAgencyUser(req, res) {
    const { id } = req.params;
    const user = await users.findOne({ where: { userId: id } });
    return res.status(200).json({
      status: 200,
      data: user,
    });
  }

  /**
   * Delete user
   * @param {object} req - Request.
   * @param {object} res - Response.
   * @returns {object} - returns created user
   */
  static async deleteAgencyUser(req, res) {
    const { id } = req.params;
    const result = await users.destroy({ where: { id } });
    return res.status(200).json({
      status: 200,
      data: {
        message: "User delete successfully!!",
        result,
      },
    });
  }
}

export default agencyUserController;
