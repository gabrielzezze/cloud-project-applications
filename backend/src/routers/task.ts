import { Router } from "express";
import {
  CreateTask,
  DeleteTask,
  GetTask,
  PatchTask,
} from "../controllers/task";

const taskRouter = Router();

taskRouter.post("/", CreateTask);

taskRouter.get("/", GetTask);

taskRouter.delete("/", DeleteTask);

taskRouter.patch("/", PatchTask);

export default taskRouter;
