import express, {Express} from 'express'
import { Server } from 'http'
import { LoggerService } from './logger/logger.service'
import {UsersController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";

export class App {
	app: Express
	port: number
	server: Server
	logger: LoggerService
	usersController: UsersController
	exceptionFilter: ExceptionFilter

	constructor(
		logger: LoggerService,
		usersController: UsersController,
		exceptionFilter: ExceptionFilter
	) {
		this.app = express()
		this.port = 8000
		this.logger = logger
		this.usersController = usersController
		this.exceptionFilter = exceptionFilter
	}

	useRouter() {
		this.app.use('/users', this.usersController.router)
	}

	useExceptionFilter() {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
	}

	public async init(){
		this.useRouter()
		this.useExceptionFilter()
		this.server = this.app.listen(this.port)
		this.logger.log(`Сервер запущен на http://localhost:${this.port}`)
	} 
}