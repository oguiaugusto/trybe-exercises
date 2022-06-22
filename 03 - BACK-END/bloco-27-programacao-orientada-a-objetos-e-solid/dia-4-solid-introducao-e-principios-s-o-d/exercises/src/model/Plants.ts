import { IPlant, IPlantRepository } from '../interfaces';
import RequestError from '../RequestError';

class PlantsModel implements IPlantRepository {
  constructor(private db: IPlantRepository) {
    this.db = db;
  }

  public getPlants = async (): Promise<IPlant[]> => {
    const plants = await this.db.getPlants();
    return plants;
  }

  public getPlantById = async (id: string): Promise<IPlant | null> => {
    const plant = await this.db.getPlantById(id);

    if (!plant) throw new RequestError(404, 'Plant not found.');
    return plant;
  }

  public removePlantById = async (id: string): Promise<IPlant | null> => {
    const removedPlant = await this.db.removePlantById(id);

    if (!removedPlant) throw new RequestError(404, 'Plant not found.');
    return removedPlant;
  }

  public getPlantsThatNeedsSunWithId = async (id: string): Promise<IPlant[]> => {
    const plants = await this.db.getPlantsThatNeedsSunWithId(id);
    return plants;
  }

  public editPlant = async (plantId: string, newPlant: IPlant): Promise<IPlant> => {
    const editedPlant = await this.db.editPlant(plantId, newPlant);
    return editedPlant;
  }

  public savePlant = async (plant: IPlant): Promise<IPlant> => {
    const savedPlant = await this.db.savePlant(plant);
    return savedPlant;
  }
}

export default PlantsModel;