export class CommonError extends Error {
  private error: Error | null;

  constructor(message: string, error?: Error) {
    super(message);
    this.error = error;
  }

  public getError(): Error {
    return this.error;
  }
}
