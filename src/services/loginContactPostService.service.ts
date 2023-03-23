import { AppDataSource } from "../data-source";
import { CustomerContacts } from "../database/entities/customerContacts";
import jwt from "jsonwebtoken";

const loginContactPostService = async (data) => {

    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);

    const foundUserCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            email: data.email,
        },
    });

    if (!foundUserCustomerContacts) {
        return [403, { "message": "Email invalid" }];
    }

    if (!foundUserCustomerContacts.is_active) {
        return [400, { "message": "User is not active" }];
    }

    const tokenCustomerContacts = jwt.sign(
        {
            type: foundUserCustomerContacts.email,
        },
        process.env.SECRET_KEY,
        {
            subject: foundUserCustomerContacts.id,
            expiresIn: "24h",
        }
    );

    return [200, { "token": `Bearer ${tokenCustomerContacts}` }]
}

export { loginContactPostService }