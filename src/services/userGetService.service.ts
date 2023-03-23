import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";

const userGetService = async (id) => {
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            id: id,
        },
    });

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            id: id,
        },
    });

    if (foundUserClient) {
        return [200, foundUserClient]
    }

    return [200, foundCustomerContacts]
}

export { userGetService }