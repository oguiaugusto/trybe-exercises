import express, { Request, Response, NextFunction } from 'express';
import PlantsFileRepository from './model/repositories/PlantsFileRepository';
import PlantsModel from './model/Plants';
import PlantsController from './controller/Plants';
import RequestError from './RequestError';

const plantsEndpoints = {
  plants: '/plants',
  plant: '/plant',
  plantId: '/plant/:id',
  sunny: '/sunny/:id',
};

const app = express();

const plantsFileRepository = new PlantsFileRepository();
const plantsModel = new PlantsModel(plantsFileRepository);
const plantsController = new PlantsController(plantsModel);

app.use(express.json());

app.get(plantsEndpoints.plants, plantsController.getPlants);
app.get(plantsEndpoints.plantId, plantsController.getPlantById);
app.delete(plantsEndpoints.plantId, plantsController.removePlantById);
app.post(plantsEndpoints.plantId, plantsController.editPlant);
app.post(plantsEndpoints.plant, plantsController.savePlant);
app.get(plantsEndpoints.sunny, plantsController.getPlantsThatNeedsSunWithId);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: RequestError, _req: Request, res: Response, _next: NextFunction): Response => {
  console.log(err);
  const { status, message } = err;

  if (!status || !message) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }

  return res.status(status).json({ message });
});

app.listen(3000, () => console.log(`Listening on port ${3000}`));
