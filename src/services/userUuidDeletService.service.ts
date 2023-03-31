import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";
import { serializerClient } from "../serializers/user";

const userUuidDeletService = async (uuid) => {
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            id: uuid,
        },
    });

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            id: uuid,
        },
    });

    if (foundUserClient) {

        await reposytoryClient.delete(uuid);

        return [204, {}]
    }

    await reposytoryCustomerContacts.delete(uuid);

    return [204, {}]

}

export { userUuidDeletService }