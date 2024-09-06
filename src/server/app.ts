import Express from "express";
import { router } from "../main/controllers/index";
export class Server {
  public app: Express.Application;

  constructor() {
    this.app = Express();
    this.middlewares();
  }

  private middlewares() {
    this.app.use(router);
    this.app.use(Express.json());
  }
}
