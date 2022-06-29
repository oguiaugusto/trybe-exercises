export default class RequestError extends Error {
  constructor(public status: number, message: string) {
    super(message);

    this.status = status;
  }
}
