import express, { Application } from "express";
import Routes from "./modules/routes";
import cors from "cors";

class App {
  public app: Application;
  private routes = new Routes();
  constructor() {
    this.app = express();
    this.preMiddlewares();
    this.config();
  }
  preMiddlewares() {
    // this.app.use(APILogs());
  }
  config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.routes.routesInitialize(this.app);
  }
}

export default new App().app;
