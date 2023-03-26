import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";

const userGetEmailService = async (email) => {

    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            email: email,
        },
    });

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            email: email,
        },
    });

    if (!foundUserClient && !foundCustomerContacts) {
        return [404, { "message": "Client or costumer not found" }]
    }

    if (foundUserClient) {
        return [200, foundUserClient]
    }

    return [200, foundCustomerContacts]
}

export { userGetEmailService }