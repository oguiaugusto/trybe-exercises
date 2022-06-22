const notificationTypes = [
  'Email',
  'Phone',
  'Console',
] as const;

export interface INotificator {
  send(message: string): void;
}

type NotificationType = typeof notificationTypes[number];

class Notificator implements INotificator {
  private type: NotificationType;

  constructor(type: NotificationType) {
    this.type = type;
  }

  send(message: string) {
    console.log(`${this.type}: ${message}`);
  }
}

export default Notificator;
