export type LogLevel = "DEBUG" | "ERROR" | "WARNING" | "INFO";

export class Logger {
  debug(message: string, ...context: unknown[]): void {
    this.writeLog("DEBUG", message, ...context);
  }

  info(message: string, ...context: unknown[]): void {
    this.writeLog("INFO", message, ...context);
  }

  error(message: string, ...context: unknown[]): void {
    this.writeLog("ERROR", message, ...context);
  }

  warning(message: string, ...context: unknown[]): void {
    this.writeLog("WARNING", message, ...context);
  }

  private writeLog(
    level: LogLevel,
    message: string,
    ...context: unknown[]
  ): void {
    const logEntry = {
      level,
      date: new Date().toISOString(),
      message,
      context: {
        ...context,
      },
    };

    switch (level) {
      case "DEBUG":
      case "INFO":
        console.info(JSON.stringify(logEntry));
        break;
      case "WARNING":
      case "ERROR":
        console.error(JSON.stringify(logEntry));
        break;
    }
  }
}
