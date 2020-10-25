import express from 'express';
import Agency from '../../controllers/AgencyControler';
const agencyRouter = express.Router();

agencyRouter.post('/newagency',Agency.createAgency);

export default agencyRouter;