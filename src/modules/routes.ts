import { Application } from "express";
import TestRoutes from "./testRoute/routes";

export default class Routes {
  public routesInitialize(app: Application): void {
    const testServerRoutes = new TestRoutes();
    testServerRoutes.routes(app);
  }
}
