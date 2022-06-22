const readlineSync = require('readline-sync');

type SeasonsMonths = {
  Summer: Array<string>,
  Autumn: Array<string>,
  Winter: Array<string>,
  Spring: Array<string>,
};

type HemisphereSeasons = { [key: string]: SeasonsMonths };

enum Months {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
};

enum Seasons {
  Summer = 'Summer',
  Autumn = 'Autumn',
  Winter = 'Winter',
  Spring = 'Spring',
};

enum Hemispheres {
  North = 'North',
  South = 'South',
};

const hemishphereSeasons: HemisphereSeasons = {
  North: {
    [Seasons.Summer]: [Months.June, Months.July, Months.August, Months.September],
    [Seasons.Autumn]: [Months.September, Months.October, Months.November, Months.December],
    [Seasons.Winter]: [Months.December, Months.January, Months.February, Months.March],
    [Seasons.Spring]: [Months.March, Months.April, Months.May, Months.June],
  },
  South: {
    [Seasons.Summer]: [Months.December, Months.January, Months.February, Months.March],
    [Seasons.Autumn]: [Months.March, Months.April, Months.May, Months.June],
    [Seasons.Winter]: [Months.June, Months.July, Months.August, Months.September],
    [Seasons.Spring]: [Months.September, Months.October, Months.November, Months.December],
  },
};

function main(): void {
  console.log('---- Seasons -----');

  const months: Array<string> = Object.values(Months);
  const hemishpheres: Array<string> = Object.values(Hemispheres);

  const monthIndex: number = readlineSync.keyInSelect(months, 'Pick a month:');
  const month: string = months[monthIndex];
  if (!month) process.exit();

  const hemishphereIndex: number = readlineSync.keyInSelect(hemishpheres, 'Now, a hemisphere:');
  const hemishphere: string = hemishpheres[hemishphereIndex];
  if (!hemishphere) process.exit();

  const seasons: string = Object
    .entries(hemishphereSeasons[hemishphere])
    .reduce((acc: string[], [season, seasonMonths]: [string, string[]]): string[] => (
      seasonMonths.includes(month) ? [...acc, season] : acc
    ), [])
    .join(', ');
  
  console.log('\n----- --- -----\n');
  console.log(`${month}'s seasons in the ${hemishphere.toLowerCase()}ern hemisphere: ${seasons.toLowerCase()}\n`);
}

main();

export {};
