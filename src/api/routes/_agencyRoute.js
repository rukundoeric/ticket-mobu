import express from 'express';
import Agency from '../../controllers/AgencyControler';
import { validator } from '../../middleware'
const agencyRouter = express.Router();

agencyRouter.post('/newagency',validator("createAgency"),Agency.createAgency);

export default agencyRouter;