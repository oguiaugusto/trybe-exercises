enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

class Data {
  public day: number;
  public month: number;
  public year: number;

  constructor(day: number, month: number, year: number) {
    const date = `${year}-${month}-${day}`;
    if (new Date(date).getFullYear() !== year) {
      this.day = 1;
      this.month = 1;
      this.year = 1990;
    } else {
      this.day = day;
      this.month = month;
      this.year = year;
    }
  }

  public getMonthName(): string {
    return Months[this.month];
  }

  public isLeapYear(): boolean {
    if (this.year % 4 === 0) {
      if (this.year % 100 === 0 && this.year % 400 !== 0) return false;
      return true;
    }
    return false;
  }

  public compare(dateToCompare: Data) {
    const thisDate = new Date(`${this.year}-${this.month}-${this.day}`);
    const otherDate = new Date(`${dateToCompare.year}-${dateToCompare.month}-${dateToCompare.day}`);

    if (thisDate > otherDate) return 1;
    if (thisDate < otherDate) return -1;
    return 0;
  }
}

const birthday = new Data(5, 4, 2003);
console.log(birthday.getMonthName());
console.log(birthday.isLeapYear());

const today = new Data(17, 5, 2022);
console.log(today.compare(birthday));
