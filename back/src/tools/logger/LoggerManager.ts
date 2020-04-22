import { EventEmitter } from "events";
import { Logger } from "./Logger";
import { CommonError } from "../errors/CommonError";

export class LogManager extends EventEmitter {
  private options: LogOptions = {
    minLevels: {
      "": "info",
    },
  };

  // Prevent the console logger from being added twice
  private consoleLoggerRegistered: boolean = false;

  public configure(options: LogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);
    return this;
  }

  public getLogger(module: string): Logger {
    let minLevel = "none";
    let match = "";

    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }

    return new Logger(this, module, minLevel);
  }

  public onLogEntry(listener: (logEntry: LogEntry) => void): LogManager {
    this.on("log", listener);
    return this;
  }

  public registerConsoleLogger(): LogManager {
    if (this.consoleLoggerRegistered) return this;
    this.onLogEntry((logEntry) => {
      let message = logEntry.message;
      let stack = "";
      if (logEntry.error !== undefined) {
        message = logEntry.error.message;
        stack = `\n${logEntry.error.getError().stack}`;
      }
      const msg = `${new Date().toISOString()} -- [${logEntry.module}] ${logEntry.level.toUpperCase()} ${message} ${stack}`;
      switch (logEntry.level) {
        case "trace":
          console.trace(msg);
          break;
        case "debug":
          console.debug(msg);
          break;
        case "info":
          console.info(msg);
          break;
        case "warn":
          console.warn(msg);
          break;
        case "error":
          console.error(msg);
          break;
        default:
          console.log(`{${logEntry.level}} ${msg}`);
      }
    });

    this.consoleLoggerRegistered = true;
    return this;
  }
}

export interface LogEntry {
  level: string;
  module: string;
  location?: string;
  message: string;
  error?: CommonError;
}

export interface LogOptions {
  minLevels: { [module: string]: string };
}

export const logging = new LogManager();

logging
  .configure({
    minLevels: {
      "": "info",
    },
  })
  .registerConsoleLogger();
