import { NextFunction, Request, Response } from "express";
const { Users } = require("../../models");

export async function AuthenticateUser(req: Request, res: Response, next: NextFunction) {
    const reject = () => {
        res.status(404).json({ message: 'Resource not authorized' })
        return
    }

    const token = req.headers.authorization
    if (!token) reject()

    const user = await Users.findOne({ where: { token } })
    if (!user.dataValues) reject() 
    
    next()
    return { key: 'user', value: user.dataValues }
}

