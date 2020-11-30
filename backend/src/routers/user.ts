import { Router } from "express";
import {
  CreateUser, login,
} from "../controllers/user";

const userRouter = Router();

userRouter.post("/", login);

userRouter.post("/register", CreateUser);

export default userRouter;
