import models from "../sequelize/models";

const { agency } = models;
export default [
//Check agency name[0]
async (req, res, next) => {
    const {agencyName } = req.body;
    const agencyRes = await agency.findOne({
      where: { agencyName},
    });
    if (agencyRes) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Agency already exist",
        },
      });
    }
    next();
  },
  //Check agency email[1]
async (req, res, next) => {
    const { agencyEmail } = req.body;
    const agencyRes = await agency.findOne({
      where: { agencyEmail},
    });
    if (agencyRes) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Agency email aleady exist",
        },
      });
    }
    next();
  },
    //Check agencyPhone[2]
async (req, res, next) => {
    const { agencyPhone } = req.body;
    const agencyRes = await agency.findOne({
      where: { agencyPhone},
    });
    if (agencyRes) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Agency phone number already exist",
        },
      });
    }
    next();
  },

  //Check wesite[3]
async (req, res, next) => {
    const { agencyWebsite } = req.body;
    const agencyRes = await agency.findOne({
      where: { agencyWebsite},
    });
    if (agencyRes) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Agency websie already exist",
        },
      });
    }
    next();
  },

  
];