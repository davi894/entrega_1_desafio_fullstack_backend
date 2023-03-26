import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Client } from "../database/entities/client";
import { AppDataSource } from "../data-source";
import { CustomerContacts } from "../database/entities/customerContacts";

const ensureAuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ "message": "Invalid Token" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
        if (error) {
            res.status(401).json({ "message": "Invalid Token" });
        }

        req.user = {
            id: decoded.sub,
        };

        return next();
    });
};

const verifyClientMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const reposytoryClient = AppDataSource.getRepository(Client);
    // const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const foundUserClient = await reposytoryClient.findOne({
        where: {
            id: req.user.id,
        },
    })
    // const foundUserCustomerContacts = await reposytoryCustomerContacts.findOne({
    //     where: {
    //         id: req.user.id,
    //     },
    // })
    // console.log(req.user)
    // console.log(req.body)
    // console.log(foundUserCustomerContacts)
    // console.log(foundUserClient)

    if (!foundUserClient.is_client) {
        return res.status(401).json({ "message": "You not authorization" });
    }

    next()
};

export { ensureAuthMiddleware, verifyClientMiddleware };
