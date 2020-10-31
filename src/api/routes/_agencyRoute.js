import express from "express";
import AgencyControler from "../controllers/AgencyControler";
import {
  userMiddleware,
  agencyMidleware,
  validator,
  verifyToken,
} from "../../middleware";

const { createAgency ,getAllAgencies }= AgencyControler;
const agencyRouter = express.Router();

agencyRouter.post(
  "/newagency",
  validator("createAgency"),
  verifyToken,
  agencyMidleware[0],
  agencyMidleware[1],
  agencyMidleware[2],
  agencyMidleware[3],
  userMiddleware[8],
  createAgency
);
agencyRouter.get("/agencies",getAllAgencies)

export default agencyRouter;
