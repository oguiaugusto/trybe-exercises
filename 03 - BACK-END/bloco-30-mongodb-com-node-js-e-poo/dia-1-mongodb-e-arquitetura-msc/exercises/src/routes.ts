import { Router } from 'express';

import TournamentsController from './controllers/Tournaments';

const tournamentsController = new TournamentsController();
const routes = Router();

routes.get('/tournaments', tournamentsController.findAll);
routes.get('/tournaments/:year', tournamentsController.findByYear);
routes.post('/tournaments', tournamentsController.create);

export default routes;