import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";
import { serializerClient } from "../serializers/user";

const userUuidPatchService = async (data, uuid) => {

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
        const updatedClient = reposytoryClient.create({
            ...foundUserClient,
            ...data,
        });
      
        await reposytoryClient.save(updatedClient);
        const ClientResponse = await serializerClient.validate(updatedClient, {
            stripUnknown: true,
        });

        return [200, ClientResponse]
    }

    const updatedCustomerContacts = reposytoryCustomerContacts.create({
        ...foundCustomerContacts,
        ...data,
    });


    const CustomerContactsResponse = await reposytoryCustomerContacts.save(updatedCustomerContacts);

    return [200, CustomerContactsResponse]

}

export { userUuidPatchService }