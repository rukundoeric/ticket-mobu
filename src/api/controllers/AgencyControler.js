import dotenv from "dotenv";
import models from "../../sequelize/models";

dotenv.config();

const { agency } = models;
class Agency {
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

    res.status(201).json({
      status: 201,
      data: agencyRes,
    });
  }

  static async getAllAgencies() {}
}

export default Agency;
