class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  public turnOn() {
    console.log(`
    brand: ${this._brand}
    size: ${this._size}
    resolution: ${this._resolution}
    connections: ${this._connections}
    connectedTo: ${this.connectedTo}`
    );
  }

  get connectedTo(): string { return this._connectedTo as string };

  set connectedTo(connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const myTv = new Tv('Samsung', 50, '4k', ['HDMI', 'VGA', 'Ethernet']);
myTv.turnOn();
myTv.connectedTo = 'VGA';
myTv.turnOn();
