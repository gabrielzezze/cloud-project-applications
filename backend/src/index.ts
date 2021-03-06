import express from "express";
import BodyParser from "body-parser";
import { LogRequest } from "./middlewares/logging";
import cors from "cors";
import taskRouter from "./routers/task";
import userRouter from './routers/user'

const app = express();

const env = process.env.NODE_ENV;
const PORT = env === "development" ? 5001 : 5000;

app.use(BodyParser.json());
app.use(cors());
// Middlewares
app.use(LogRequest);

// Routers
app.use("/task", taskRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`[ INFO ] App is ready @ ${PORT} in ${env} mode`);
});

// Express has problems w/ SIGINT
process.on("SIGINT", () => process.exit());
