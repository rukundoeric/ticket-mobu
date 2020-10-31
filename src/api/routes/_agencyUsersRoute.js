import express from "express";
import AgencyUsersControler from "../controllers/agencyUsersController";
import authController from "../controllers/authController";
import {
  userMiddleware,
  validator,
  verifyToken,
  verifyToken1,
  agencyUserMiddleware,
} from "../../middleware";


let { createAgencyUser, deleteAgencyUser } = AgencyUsersControler;
let { agencylogin } = authController
const agencyUsersRouter = express.Router();

agencyUsersRouter.post(
  "/new_manager",
  validator("createAgencyUser"),
  verifyToken,
  userMiddleware[8],
  agencyUserMiddleware[0],
  createAgencyUser
);

agencyUsersRouter.post("/agency_login", agencyUserMiddleware[3], agencylogin);

agencyUsersRouter.post(
  "/new_teller",
  validator("createAgencyUser"),
  verifyToken1,
  agencyUserMiddleware[1],
  createAgencyUser
);

agencyUsersRouter.delete(
  "/teller/:id/remove",
  verifyToken1,
  agencyUserMiddleware[1],
  deleteAgencyUser
);
export default agencyUsersRouter;
