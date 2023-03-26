import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";
import { serializerClient } from "../serializers/user";


const userIsActivateService = async (data) => {
    const reposytoryClient = AppDataSource.getRepository(Client);
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            email: data.email,
        },
    });

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            email: data.email,
        },
    });

    if (foundUserClient) {
        const updatedClient = reposytoryClient.create({
            ...foundUserClient,
            is_active: true,
        });

        await reposytoryClient.save(updatedClient);
        const ClientResponse = await serializerClient.validate(updatedClient, {
            stripUnknown: true,
        });

        return [200, ClientResponse]
    }


    const updatedCustomerContacts = reposytoryCustomerContacts.create({
        ...foundCustomerContacts,
        is_active: true,
    });

    const CustomerContactsResponse = await reposytoryCustomerContacts.save(updatedCustomerContacts);

    return [200, CustomerContactsResponse]

}


export { userIsActivateService }