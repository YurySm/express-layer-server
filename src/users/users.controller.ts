import {BaseController} from "../common/base.controller";
import {LoggerService} from "../logger/logger.service";
import {NextFunction, Response, Request} from "express";
import {HttpError} from "../errors/http-error";

export class UsersController extends BaseController {
    constructor(
        logger: LoggerService
    ) {
        super(logger);
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