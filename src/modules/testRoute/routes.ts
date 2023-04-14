import { Application, Router } from "express";
import TestController from "./controller";
export default class TestRoutes {
  public routes(app: Application): void {
    const router = Router();
    app.use("/test", router);

    const testController = new TestController();

    router.route("/").get(testController.sendHtml);
  }
}
