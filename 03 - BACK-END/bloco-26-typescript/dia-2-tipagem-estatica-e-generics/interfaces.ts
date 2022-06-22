interface Automobile {
  name: string,
  brand: string,
  color: string,
  turnOn: () => void,
  turnOff: () => void,
};

interface Aircraft extends Automobile {
  wings: number,
};
