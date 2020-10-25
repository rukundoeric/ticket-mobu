import { Router } from 'express';
import userController from '../controllers/userController';
import authController from '../controllers/authController';
import { userMiddleware, validator, verifyToken } from "../../middleware";
const {
  createUser,
} = userController;
const { login } = authController;


const userRouter = Router();

userRouter.post(
  "/new",
  validator("createUser"),
  verifyToken,
  userMiddleware[0],
  userMiddleware[3],
  createUser
);

userRouter.post(
  "/login",
  userMiddleware[1],
  login
);


export default userRouter
