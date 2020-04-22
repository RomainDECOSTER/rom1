import { EventEmitter } from "events";
import { LogEntry } from "./LoggerManager";
import { CommonError } from "../errors/CommonError";

export class Logger {
  private logManager: EventEmitter;
  private minLevel: number;
  private module: string;
  private readonly levels: { [key: string]: number } = {
    trace: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5,
  };

  constructor(logManager: EventEmitter, module: string, minLevel: string) {
    this.logManager = logManager;
    this.module = module;
    this.minLevel = this.levelToInt(minLevel);
  }

  /**
   * Converts a string level (trace/debug/info/warn/error) into a number
   *
   * @param minLevel
   */
  private levelToInt(minLevel: string): number {
    if (minLevel.toLowerCase() in this.levels) return this.levels[minLevel.toLowerCase()];
    else return 99;
  }

  /**
   * Central logging method.
   * @param logLevel
   * @param message
   */
  public log(logLevel: string, message: string, error?: CommonError): void {
    const level = this.levelToInt(logLevel);
    if (level < this.minLevel) return;

    const logEntry: LogEntry = { level: logLevel, module: this.module, message, error };

    // Obtain the line/file through a thoroughly hacky method
    // This creates a new stack trace and pulls the caller from it.  If the caller
    // if .trace()
    const newError = new Error("");
    if (newError.stack) {
      const cla = newError.stack.split("\n");
      let idx = 1;
      while (idx < cla.length && cla[idx].includes("at Logger.Object.")) idx++;
      if (idx < cla.length) {
        logEntry.location = cla[idx].slice(cla[idx].indexOf("at ") + 3, cla[idx].length);
      }
    }
    this.logManager.emit("log", logEntry);
  }

  public trace(message: string, error?: CommonError): void {
    this.log("trace", message, error);
  }
  public debug(message: string, error?: CommonError): void {
    this.log("debug", message, error);
  }
  public info(message: string, error?: CommonError): void {
    this.log("info", message, error);
  }
  public warn(message: string, error?: CommonError): void {
    this.log("warn", message, error);
  }
  public error(message: string, error?: CommonError): void {
    this.log("error", message, error);
  }
}
