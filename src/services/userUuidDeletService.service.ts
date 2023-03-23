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
        if (!foundUserClient.is_active) {
            return [400, { "message": "Client is not active" }]
        }
        const updatedClient = reposytoryClient.create({
            ...foundUserClient,
            is_active: false,
        });

        await reposytoryClient.save(updatedClient);
        const ClientResponse = await serializerClient.validate(updatedClient, {
            stripUnknown: true,
        });

        return [204, ClientResponse]
    }

    if (!foundCustomerContacts.is_active) {
        return [400, { "message": "Contact is not active" }]
    }

    const updatedCustomerContacts = reposytoryCustomerContacts.create({
        ...foundCustomerContacts,
        is_active: false,
    });

    const CustomerContactsResponse = await reposytoryCustomerContacts.save(updatedCustomerContacts);

    return [204, CustomerContactsResponse]

}

export { userUuidDeletService }