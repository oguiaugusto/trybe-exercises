import { Router } from 'express';

import TournamentsController from './controllers/Tournaments';

const tournamentsController = new TournamentsController();
const routes = Router();

routes.get('/tournaments', tournamentsController.findAll);

export default routes;