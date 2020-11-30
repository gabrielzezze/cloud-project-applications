import { Router } from "express";
import {
  CreateTask,
  DeleteTask,
  GetTask,
  PatchTask,
} from "../controllers/task";
import { AuthenticateUser } from "../middlewares/authentication/authentication";

const taskRouter = Router();

taskRouter.post(
  "/", 
  (req, res, next) => AuthenticateUser(req, res, next),
  CreateTask
);

taskRouter.get(
  "/",
  (req, res, next) => AuthenticateUser(req, res, next),
  GetTask
);

taskRouter.delete(
  "/",
  (req, res, next) => AuthenticateUser(req, res, next),
  DeleteTask
);

taskRouter.patch(
  "/",
  (req, res, next) => AuthenticateUser(req, res, next),
  PatchTask
);

export default taskRouter;
