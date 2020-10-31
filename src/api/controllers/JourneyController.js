import dotenv from "dotenv";
import models from "../../sequelize/models";
import { v4 as journeyId } from "uuid";
const { journey } = models;
class Journey {
  static async createJourney(req, res) {
    const { origin, destination, price, availableSits } = req.body;
    const status = "unscheduled";
    const doneBy = req.user.id;
    const agencyId = req.user.agency_id;

    const { dataValues } = await journey.create({
      id: journeyId(),
      origin,
      destination,
      price,
      available_sits: availableSits,
      status,
      done_by: doneBy,
      agency_id: agencyId,
    });
    return res.status(201).json({
      status: 201,
      data: {
        message: "Journey created successfully",
        user: dataValues,
      },
    });
  }

  static async getJourneys(req, res) {
    const journeys = await journey.findAll({
      where: { agency_id: req.params.agencyId },
    });
    return res.status(200).json({
      status: 200,
      journeys,
    });
  }

  static async getJourney(req, res) {
    const journeys = await journey.findOne({
      where: { agency_id: req.params.agencyId, id: req.params.journeyid },
    });
    return res.status(200).json({
      status: 200,
      journeys,
    });
  }

  static async updateJourney(req, res) {
    const { origin, destination, price, availableSits } = req.body;
    const status = "unscheduled";
    const doneBy = req.user.id;
    const agencyId = req.user.agency_id;

    const updateResponse = await journey.update(
      {
        origin,
        destination,
        price,
        available_sits: availableSits,
        status,
        done_by: doneBy,
        agency_id: agencyId,
      },
      {
        where: {
          id: req.params.journeyid,
        },
      }
    );
    return res.status(201).json({
      status: 201,
      data: {
        message: "Journey update successfully",
        data: updateResponse,
      },
    });
  }

  static async removeJourney(req,res) {
    const updateResponse = await journey.destroy({
      where: {
        id: req.params.journeyid,
      },
    });
    return res.status(201).json({
      status: 201,
      data: {
        message: "Journey update successfully",
        data: updateResponse,
      },
    });
  }
}

export default Journey;
