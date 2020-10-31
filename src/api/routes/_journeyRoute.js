import express from "express";
import Journey from "../controllers/JourneyController";
import {
  journeyMiddleware,
  validator,
  verifyToken1,
  agencyUserMiddleware,
} from "../../middleware";
const journeyRouter = express.Router();
const { createJourney,getJourneys,getJourney,updateJourney,removeJourney} = Journey;

journeyRouter.post(
  "/newjourney",
  validator("createJourney"),
  verifyToken1,
  agencyUserMiddleware[1],
  journeyMiddleware,
  createJourney
);
journeyRouter.get(
  "/:agencyId/alljourneys",
  getJourneys
);


journeyRouter.get(
  "/:agencyId/:journeyid",
  getJourney
);

journeyRouter.patch(
  "/:journeyid/update",
  validator("createJourney"),
  verifyToken1,
  agencyUserMiddleware[1],
  updateJourney
);

journeyRouter.delete(
  "/:journeyid/remove",
  verifyToken1,
  agencyUserMiddleware[1],
  removeJourney
);

export default journeyRouter;
