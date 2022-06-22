import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangleArea(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangleArea(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangleArea(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.squareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.squareArea(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.squareArea(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangleArea(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangleArea(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangleArea(100, 200)}cm²`);

console.log(`Losango com diagonais iguais a 32cm e 18cm: ${Exercise.rhombusArea(32, 18)}cm²`);
console.log(`Losango com diagonais iguais a 200cm e 50cm: ${Exercise.rhombusArea(200, 50)}cm²`);
console.log(`Losango com diagonais iguais a 75cm e 25cm: ${Exercise.rhombusArea(75, 25)}cm²`);

console.log(`Trapézio com base maior igual a 100cm, base menor igual a 70cm e altura igual a 50cm: ${Exercise.trapezoidArea(100, 70, 50)}cm²`);
console.log(`Trapézio com base maior igual a 75cm, base menor igual a 50cm e altura igual a 35cm: ${Exercise.trapezoidArea(75, 50, 35)}cm²`);
console.log(`Trapézio com base maior igual a 150cm, base menor igual a 120cm e altura igual a 80cm: ${Exercise.trapezoidArea(150, 120, 80)}cm²`);

console.log(`Círculo com raio igual a 25cm: ${Exercise.circleArea(25)}cm²`);
console.log(`Círculo com raio igual a 100cm: ${Exercise.circleArea(100)}cm²`);
console.log(`Círculo com raio igual a 12,5cm: ${Exercise.circleArea(12.5)}cm²`);
