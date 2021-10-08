const rectangleArea = (...triangleInfo) => triangleInfo.reduce((acc, number) => acc * number);

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
});