import express from "express";
import Journey from "../controllers/JourneyController";
import {
  userMiddleware,
  journeyMiddleware,
  validator,
  verifyToken,
} from "../../middleware";
const journeyRouter = express.Router();
const {createJourney}=Journey;
const {getJourneys}=Journey;

journeyRouter.post(
  "/newjourney",
  validator("createJourney"),
  journeyMiddleware,
  createJourney
);
journeyRouter.get('/alljourneys',getJourneys)

export default journeyRouter;
