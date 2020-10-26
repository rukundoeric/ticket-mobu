import express from "express";
import userRouter from "./_userRoute";
import agencyRouter from "./_agencyRoute";

const api = express();

api.use("/user", userRouter);
api.use("/agency", agencyRouter);

export default api;
