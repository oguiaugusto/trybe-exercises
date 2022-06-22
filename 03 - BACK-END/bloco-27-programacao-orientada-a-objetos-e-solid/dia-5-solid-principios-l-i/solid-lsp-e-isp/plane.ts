class Passenger {
  constructor(
    public nome: string,
    public cpf: number,
  ) {}
}

class ShippedItem {
  constructor(
    public nome:string, 
    public id:number, 
    public customerID:string,
  ) {}
}

class Flight {
  constructor(public num:number, public subject:(Passenger | ShippedItem)[]) {}

  Add(newSubject: Passenger | ShippedItem): void {
    this.subject.push(newSubject); 
  }

  Remove(removedSubject: Passenger | ShippedItem): void {
    const index = this.subject.indexOf(removedSubject, 0);
    if (index > -1) this.subject.splice(index, 1);
  }
}

export { Passenger, ShippedItem, Flight };
