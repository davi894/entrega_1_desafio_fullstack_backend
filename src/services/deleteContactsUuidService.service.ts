import { AppDataSource } from "../data-source";
import { CustomerContacts } from "../database/entities/customerContacts";

const deleteContactsUuidService = async (contacetId) => {
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            id: contacetId,
        },
    });

    await reposytoryCustomerContacts.delete(foundCustomerContacts.id);

    return [204, {}]
}

export { deleteContactsUuidService }