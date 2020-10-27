import dotenv from "dotenv";
import models from "../../sequelize/models";

dotenv.config();

const { agency } = models;

class Agency {
  /**
   * creating a new user
   * @param {object} req - Request.
   * @param {object} res - Response.
   * @returns {object} - returns created user
   */
  static async createAgency(req, res) {
    const newAgency = {
      agencyName: req.body.agencyName,
      agencyLogo: req.body.agencyLogo,
      agencyEmail: req.body.agencyEmail,
      agencyPhone: req.body.agencyPhone,
      agencyWebsite: req.body.agencyWebsite,
    };

    const inserter = await agency.create(newAgency);
    const agencyRes = inserter.dataValues;

   return res.status(201).json({
      status: 201,
      data: agencyRes,
    });
  }

  static async getAllAgencies(req, res) {
    const agencyResult = await agency.findAll();

    const data = agencyResult.map((item) => item.dataValues);

    return res.status(200).json({
      status: 200,
      agencies:data,
    });
  }
}

export default Agency;
