import { NextFunction, Request, Response } from "express";
const { Users } = require("../models");
import uniqid from 'uniqid'

export async function CreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { username, password } = req.body;
  // CRIAR O TOKEN @ZEZZE
  const token = uniqid('token_')
  const user = await Users.create({
    username,
    password,
    token
  });
  return res.status(201).json(user.dataValues);
}

export async function login(req: Request, res: Response, _next: NextFunction) {
    const { username, password } = req.body
    if (!username || !password) {
        res.status(400).json({ message: 'Malformed Request' })
        return
    }

    const user = await Users.findOne({ where: { username, password } })
    if (!user) {
        res.status(401).json({ message: 'Invalid Credentials' })
        return
    }

    res.status(200).json({ ...user.dataValues, password: null })
    return

}
