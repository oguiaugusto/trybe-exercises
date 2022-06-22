import Notificator, { INotificator } from './progressNotification';

class ReadingTracker {
  private booksRead: number;
  private readingGoal: number;
  private notificator: INotificator;

  constructor(readingGoal: number, notificator: INotificator = new Notificator('Console')) {
    this.booksRead = 0;
    this.readingGoal = readingGoal;
    this.notificator = notificator;
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.send(
        'Congratulations! You\'ve reached your reading goal!'
      );
      return;
    }
    this.notificator.send(
      'There are still some books to go!',
    );
  }
}

const notificator = new Notificator('Email');
const readTracker = new ReadingTracker(20, notificator);
readTracker.trackReadings(12);
readTracker.trackReadings(9);