import { IAirplane, ICar, IFuturisticCar } from './interfaces';

export class Car implements ICar {
  drive(): void { console.log('Driving a car'); }
}

export class Airplane implements IAirplane {
  fly(): void { console.log('Flying an airplane'); }
}

export class FuturisticCar implements IFuturisticCar {
  drive(): void { console.log('Driving a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
