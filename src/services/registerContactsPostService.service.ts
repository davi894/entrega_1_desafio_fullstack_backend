import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { CustomerContacts } from "../database/entities/customerContacts";

const registerContactsPostService = async (data, userId) => {

    const reposytoryClient = AppDataSource.getRepository(Client);
    const reposytoryCustomerContacts = AppDataSource.getRepository(CustomerContacts);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            id: userId,
        },
    });

    const foundUserCustomerContacts = await reposytoryCustomerContacts.findOne({
        where: {
            email: data.email,
            phone: data.phone
        },
    });

    if (foundUserCustomerContacts) {
        return [409, { "message": "Costumer alredy exists!" }]
    }

    const newCostumer = reposytoryCustomerContacts.create({
        ...data,
        client_: foundUserClient.id
    })

    await reposytoryCustomerContacts.save(newCostumer)

    return [201, newCostumer]
}

export { registerContactsPostService }