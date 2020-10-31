import dotenv from "dotenv";
import models from "../../sequelize/models";
import { v4 as agencyId } from "uuid";

dotenv.config();

const { agency } = models;
class AgencyControler {
  static async createAgency(req, res) {
    const newAgency = {
      id:agencyId(),
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
      data: {
        agencyName: agencyRes.agencyName,
        agencyLogo: agencyRes.agencyLogo,
        agencyEmail: agencyRes.agencyEmail,
        agencyWebsite:agencyRes.agencyWebsite,
        agencyPhone:agencyRes.agencyWebsite
      },
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

export default AgencyControler;
