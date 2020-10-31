import express from "express";
import userRouter from "./_userRoute";
import agencyRouter from "./_agencyRoute";
import agencyUserRouter from "./_agencyUsersRoute";
const api = express();

api.use("/user", userRouter);
api.use("/agency", agencyRouter);
api.use("/agency_user", agencyUserRouter);

export default api;
