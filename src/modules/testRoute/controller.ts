import { Request, Response } from "express";

export default class testController {
  public sendHtml = async (req: Request, res: Response) => {
    try {
      res.send({ data: "hello world" });
    } catch (error) {
      return error;
    }
  };
}
