import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: {
      users: "Users"
    }
  })
})

export default userRouter
