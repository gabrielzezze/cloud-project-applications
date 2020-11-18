import { NextFunction, Request, Response } from "express";
const { Tasks } = require("../models");

export async function CreateTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, status } = req.body;
  const task = await Tasks.create({
    title,
    status,
  });
  return res.status(201).json(task.dataValues);
}

export async function GetTask(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await Tasks.findAll();
    return res.status(201).json(tasks.map((t) => t.dataValues));
  } catch (e) {
    console.log(e);
  }
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
  await Tasks.update(
    { title, status },
    {
      where: {
        id,
      },
    }
  );
  const task = await Tasks.findOne({ where: { id } });
  return res.status(201).json(task.dataValues);
}
