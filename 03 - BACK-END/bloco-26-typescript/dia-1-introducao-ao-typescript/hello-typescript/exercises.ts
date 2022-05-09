export function greeter(name: string) {
  return `Olá, ${name}!`;
};

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
};

export function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
};

export function squareArea(side: number): number {
  return side ** 2;
};

export function rectangleArea(base: number, height: number):number {
  return base * height;
};

export function rhombusArea(majorDiagonal: number, minorDiagonal: number): number {
  return (majorDiagonal * minorDiagonal) / 2;
};

export function trapezoidArea(majorBase: number, minorBase: number, height: number): number {
  return ((majorBase + minorBase) * height) / 2;
};

export function circleArea(radius:number): number {
  const PI:number = 3.14;
  return PI * (radius ** 2);
};
