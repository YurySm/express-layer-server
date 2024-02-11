import { Logger, ILogObj, ISettingsParam } from "tslog"

export interface ILogger {
	logger: Logger<ISettingsParam<ILogObj>>
    log: (...args: unknown[]) => void
    error: (...args: unknown[]) => void 
    warn: (...args: unknown[]) => void 
}