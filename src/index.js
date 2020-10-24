import 'regenerator-runtime';
import express from 'express';
import dotenv from 'dotenv';
import { glabalMiddleware } from './middleware';
import db from './sequelize/models/index';
import api from './api/routes';

dotenv.config();

const port = process.env.PORT || 7888;
const app = express();

glabalMiddleware(app);

const { sequelize } = db;

app.get('/', api);
app.use((req, res) => res.status(404).json({
  status: 404,
  error: {
    message: 'Page Not found'
  }
}));


sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(
      `Database successfully connected\nPID: ${process.pid} Server is listening on port: ${port} in ${process.env.NODE_ENV} mode`
    );
  })
});
