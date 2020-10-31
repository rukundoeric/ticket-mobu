import models from "../sequelize/models";

const { journey } = models;
export default [
  //Check duplication[0]
  async (req, res, next) => {
    const { origin,destination } = req.body;
    const jOrigin=origin;
    const jDestination=destination;
    const agencyRes = await journey.findOne({
      where: { origin:jOrigin, destination:jDestination,agency_id:'2999c6e7-d17c-4457-868f-0f9e542c242a' },
    });
    if (agencyRes) {
      return res.status(400).json({
        status: 400,
        error: {
          message: "Journey already exist",
        },
      });
    }
    next();
  }

];
