import { NextFunction, Request, Response } from "express";

export function CreateTransaction(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body
    return res.status(201).json({ status: 'ok', message: `${name} is Awesome!` })
}