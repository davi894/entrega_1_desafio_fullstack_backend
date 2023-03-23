import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";


const listContactsUuidService = async (userId, paramId) => {
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const reposytoryClient = AppDataSource.getRepository(Client);
    const contact = await reposytoryCustomerContacts.find({
        where: {
            id: paramId,
            client_: {
                id: userId,
            },
        },

    })
    return [200, contact]
}




export { listContactsUuidService }