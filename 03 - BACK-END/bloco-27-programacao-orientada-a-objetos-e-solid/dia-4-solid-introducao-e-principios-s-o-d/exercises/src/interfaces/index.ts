import { NextFunction, Request, Response } from 'express';

export interface IPlant {
  id: string,
  breed: string,
  needsSun: boolean,
  origin: string,
  size: number,
  specialCare?: { waterFrequency: number }
}

export interface IOpsInfo { createdPlants: number }

export interface IPlantRepository {
  getPlants(): Promise<IPlant[]>;
  getPlantById(id: string): Promise<IPlant | null>;
  removePlantById(id: string): Promise<IPlant | null>;
  getPlantsThatNeedsSunWithId(id: string): Promise<IPlant[]>;
  editPlant(plantId: string, newPlant: IPlant): Promise<IPlant>;
  savePlant(plant: IPlant): Promise<IPlant>;
}

export interface IPlantController {
  getPlants(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
  getPlantById(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
  removePlantById(req: Request, res: Response, next: NextFunction): Promise<void | undefined>;
  getPlantsThatNeedsSunWithId(
    req: Request, res: Response, next: NextFunction,
  ): Promise<Response | undefined>;
  editPlant(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
  savePlant(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>;
}
