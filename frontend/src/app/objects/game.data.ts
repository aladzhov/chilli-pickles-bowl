export class Game {
  id!: number;
  name!: string;
  players!: Player[];
  pieces!: Piece[];
  field!: Field;
  dice?: Die[];
  timed: boolean = false;
  takebacks: boolean = false;
  turnsPerPlayer?: number;
}

export class Player {
  id!: number;
  name!: string;
  time?: number;
  turn?: number;
  text: string = '';
}

export class Piece {
  id!: number;
  owner!: number;
  name!: string;
  image!: string;
  position!: Point;
  description?: Description;
  colidable: boolean = true; // If should replace the figure
}

export class Point {
  x!: number;
  y!: number;
}

export class Description {
  properties!: Map<string, string>;
}

export class Field {
  id!: number;
  type!: string; // Chess, Sport, etc.
  mainColor?: string;
  secondaryColor?: string;
  width!: number;
  height!: number;
  specialTiles?: Tile[];
}

export class Tile {
  id!: number;
  image?: string;
  position!: Point;
}

export class Die {
  id!: number;
  sides!: number;
  side?: Map<number, string | undefined>; // number of side to an image
}
