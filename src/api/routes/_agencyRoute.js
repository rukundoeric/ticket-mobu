import express from "express";
import { createAgency } from "../controllers/AgencyControler";
import {
  userMiddleware,
  agencyMidleware,
  validator,
  verifyToken,
} from "../../middleware";
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

export default agencyRouter;
