import { AppDataSource } from "../../data-source";
import { CustomerContacts } from "../../database/entities/customerContacts";



const updateContactsUuidService = async (reqData, contactId, idClient) => {

    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);

    const foundCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            id: contactId,
            client_: {
                id: idClient,
            },
        },
    });

    if (foundCustomerContacts) {
        if (reqData.phone == foundCustomerContacts.phone || reqData.email === foundCustomerContacts.email || reqData.name == foundCustomerContacts.name) {
            const updatedClient = reposytoryCustomerContacts.create({
                ...foundCustomerContacts,
                ...reqData,
            });

            const response = await reposytoryCustomerContacts.save(updatedClient);

            return [200, response]
        }

        const updatedContact = reposytoryCustomerContacts.create({
            ...foundCustomerContacts,
            ...reqData,
        });

        await reposytoryCustomerContacts.save(updatedContact);


        return [200, updatedContact]

    } else if (reqData.phone !== foundCustomerContacts.phone && reqData.email !== foundCustomerContacts.email && reqData.name !== foundCustomerContacts.name) {
        const foundUserContactEmail = await reposytoryCustomerContacts.findOne({
            where: {
                email: reqData.email,
            },
        });

        const foundUserContactphone = await reposytoryCustomerContacts.findOne({
            where: {
                phone: reqData.phone
            },
        });

        if (foundUserContactEmail) {
            return [409, { "message": "Contact alredy exists!" }]
        }

        if (foundUserContactphone) {
            return [409, { "message": "Contact phone alredy exists!" }]
        }

        const updatedContact = reposytoryCustomerContacts.create({
            ...foundCustomerContacts,
            ...reqData,
        });

        const response = await reposytoryCustomerContacts.save(updatedContact);

        return [200, response]
    }

}

export { updateContactsUuidService }
