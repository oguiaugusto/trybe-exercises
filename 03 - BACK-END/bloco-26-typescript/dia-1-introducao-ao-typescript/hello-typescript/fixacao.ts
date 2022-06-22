enum WeekDays {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
};

enum RainbowColors {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Anil',
  Violet = 'Violeta',
};

enum Actions {
  Save,
  Print,
  Open,
  View,
  Close,
};

enum CardinalPoints {
  North = 'N',
  East = 'E',
  South = 'S',
  West = 'W',
};

let friday: WeekDays = WeekDays.Friday;
let indigo: RainbowColors = RainbowColors.Indigo;
let actionClose: Actions = Actions.Close;
let north: CardinalPoints = CardinalPoints.North;

console.log(friday); // 6
console.log(indigo); // Anil
console.log(actionClose); // 4
console.log(north); // N
