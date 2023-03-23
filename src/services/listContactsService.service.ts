import { AppDataSource } from "../data-source";
import { CustomerContacts } from "../database/entities/customerContacts";


const listContactsService = async (userId) => {
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);
    const allContacts = await reposytoryCustomerContacts.find({
        where: {
            client_: {
                id: userId,
            },
        },

    })
    return [200, allContacts]
}


export { listContactsService }