import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';
import { IPlantController, IPlantRepository, IPlant } from '../interfaces';

class PlantsController implements IPlantController {
  constructor(public model: IPlantRepository) {
    this.model = model;
  }

  public getPlants = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const plants = await this.model.getPlants();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public getPlantById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const plant = await this.model.getPlantById(req.params.id);
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public removePlantById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | undefined> => {
    try {
      await this.model.removePlantById(req.params.id);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  public getPlantsThatNeedsSunWithId = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const plants = await this.model.getPlantsThatNeedsSunWithId(req.params.id);
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public editPlant = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const { params: { id }, body: { breed, needsSun, origin, size, specialCare } } = req;

      const plantObj: IPlant = { id, breed, needsSun, origin, size, specialCare };
      const plant = await this.model.editPlant(id, plantObj);

      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  public savePlant = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      const { body: { breed, needsSun, origin, size, specialCare } } = req;
      const id = randomUUID();
  
      const plantObj: IPlant = { id, breed, needsSun, origin, size, specialCare };
      const plant = await this.model.savePlant(plantObj);
  
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }
}

export default PlantsController;
