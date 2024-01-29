import {ILogObj, ISettingsParam, Logger} from "tslog";

const loggerSettings = {
    displayInstanceName: false,
    displayLoggerName: false,
    displayFilePath: 'hidden',
    displayFunctionName: false
}

export class LoggerService {
	public logger: Logger<ISettingsParam<ILogObj>>

    constructor() {
        this.logger = new Logger({
                        prettyLogTemplate: "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}\t{{logLevelName}}\t",
                        prettyErrorTemplate: "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
                        prettyErrorStackTemplate: "  • {{fileName}}\t{{method}}\n\t{{filePathWithLine}}",
                        prettyErrorParentNamesSeparator: ":",
                        prettyErrorLoggerNameDelimiter: "\t",
                        stylePrettyLogs: true,
                        prettyLogTimeZone: "local",
                        prettyLogStyles: {
                            logLevelName: {
                                "*": ["bold", "black", "bgWhiteBright", "dim"],
                                SILLY: ["bold", "white"],
                                TRACE: ["bold", "whiteBright"],
                                DEBUG: ["bold", "green"],
                                INFO: ["bold", "blue"],
                                WARN: ["bold", "yellow"],
                                ERROR: ["bold", "red"],
                                FATAL: ["bold", "redBright"],
                            },
                            dateIsoStr: ["black", "dim"],
                            filePathWithLine: "white",
                            name: ["white", "bold"],
                            nameWithDelimiterPrefix: ["white", "bold"],
                            nameWithDelimiterSuffix: ["white", "bold"],
                            errorName: ["bold", "bgRedBright", "whiteBright"],
                            fileName: ["yellow"],
                        },
        })
    }

    log(...args: unknown[]) {
        this.logger.info(...args)
    }

    error(...args: unknown[]): void {
        this.logger.error(...args);
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args)
    }
}