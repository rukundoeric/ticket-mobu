import dotenv from "dotenv";
import models from "../../sequelize/models";
import { v4 as journeyId } from 'uuid/v4';
const { journey } = models;
class Journey{
    
    static async createJourney(req, res) {
        const { origin, destination, timeToGo, phone, role } = req.body;
        const password = await hashPassword(psw);
        const { dataValues } = await users.create({
          userId: userId(),
          firstName,
          lastName,
          email,
          phone,
          role,
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
    

}