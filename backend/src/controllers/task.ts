import { NextFunction, Request, Response } from "express";
const { Tasks } = require("../models");

export function CreateTask(req: Request, res: Response, next: NextFunction) {
  const { title, status } = req.body;
  Tasks.create({
    title,
    status,
  });
  return res.status(201).json({ status: "ok", message: `${title} added!` });
}

export async function GetTask(req: Request, res: Response, next: NextFunction) {
  const tasks = await Tasks.findAll();
  return res.status(201).json(tasks.map((t) => t.dataValues));
}

export async function DeleteTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.query;
  const tasks = await Tasks.destroy({
    where: {
      id,
    },
  });
  return res.status(201).json({ id });
}

export async function PatchTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.query;
  const { title, status } = req.body;
  const tasks = await Tasks.update(
    { title, status },
    {
      where: {
        id,
      },
    }
  );
  console.log(tasks);
  return res.status(201).json({ id });
}
