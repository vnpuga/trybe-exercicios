class TV {
  _brand: string;
  _size: number;
  _resolution: string;
  _connections: string[];
  _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}, resolution: ${this._resolution}, ${this._connections}`)
  }
}

const newTV = new TV('Samsung', 70, '4K', ['HDMI', 'Ethernet', 'Wifi']);
newTV.turnOn();