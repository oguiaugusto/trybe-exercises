import { Flight, Passenger, ShippedItem } from './plane';

class Company {
  constructor(public name: string, public flights: Flight[]) {}

  NewFlight(flightNum: number): void {
    const newFlight = new Flight(flightNum, []);
    this.flights.push(newFlight);
  };

  AddToFlight(_flightNum: number, _subject: Passenger | ShippedItem): void {};
  RemoveFromFlight(_flightNum: number, _subject: Passenger | ShippedItem): void {};
}

class TravelingCompany extends Company {
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) currentFlight.Add(passenger);
  }

  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) currentFlight.Remove(passenger);
  }
}

class ShippingCompany extends Company {
  AddToFlight(flightNum: number, item: ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num === flightNum);
    if (currentFlight) currentFlight.Add(item);
  }
}

export { ShippingCompany, TravelingCompany };
