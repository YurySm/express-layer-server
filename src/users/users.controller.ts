import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Response, Request} from "express";
import {HttpError} from "../errors/http-error";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { ILogger } from "../logger/logger.interface";
import 'reflect-metadata' 
import { IUsersController } from "./users.controller.interface";

@injectable()
export class UsersController extends BaseController implements IUsersController {
    constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
        super(loggerService);
        this.bindRoutes([
            {path: '/login', method: 'post', func: this.login},
            {path: '/register', method: 'post', func: this.register}
        ])
    }

    login(req: Request, res: Response, next: NextFunction) {
        // this.ok(res,'login')
        next(new HttpError(401, 'test exception filter', 'login'))
    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res,'register')
    }
}