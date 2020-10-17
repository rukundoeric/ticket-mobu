import express from 'express';
import userRouter from './_userRoute';

const api = express();

api.use('/user', userRouter);

export default api;