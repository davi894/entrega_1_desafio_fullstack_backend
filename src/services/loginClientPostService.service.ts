import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";

const loginClientPostService = async (data) => {
    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            email: data.email,
        },
    });

    if (!foundUserClient) {
        return [400, { "message": "Email invalid" }]
    }

    const tokenClient = jwt.sign(
        {
            type: foundUserClient.email,
        },
        process.env.SECRET_KEY,
        {
            subject: foundUserClient.id,
            expiresIn: "24h",
        }
    );

    return [200, { "token": `Bearer ${tokenClient}` }]
}

export { loginClientPostService }