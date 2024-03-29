import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization.split(' ')[1], this.secret, (error, decoded) => {
				if (error) {
					next();
				} else if (decoded && typeof decoded !== 'string') {
					req.user = decoded.email;
					next();
				}
			});
		} else {
			next();
		}
	}
}
