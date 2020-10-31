import dotenv from "dotenv";
import models from "../../sequelize/models";
import { v4 as journeyId } from "uuid";
const { journey } = models;
class Journey {
  static async createJourney(req, res) {
    const { origin, destination, price, availableSits } = req.body;
    const status="unscheduled";
    const doneBy="kskj02jsjsksa";
    const agencyId="2999c6e7-d17c-4457-868f-0f9e542c242a";

    const { dataValues } = await journey.create({
      id:journeyId(),
      origin,
      destination,
      price,
      available_sits:availableSits,
      status,
      done_by:doneBy,
      agency_id:agencyId,
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
    const journeys = await journey.findAll({ where: {agency_id:'2999c6e7-d17c-4457-868f-0f9e542c242a' }});
    return res.status(200).json({
      status: 200,
      journeys,
    });
  }


}

export default Journey;