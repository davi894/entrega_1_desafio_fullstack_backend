import { AppDataSource } from "../../data-source";
import { Client } from "../../database/entities/client";
import { serializerClient } from "../../serializers/user";

const userUuidPatchService = async (data, uuid) => {

    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            id: uuid,
        },
    });

    if (data.phone == foundUserClient.phone || data.email === foundUserClient.email || data.name == foundUserClient.name) {
        const updatedClient = reposytoryClient.create({
            ...foundUserClient,
            ...data,
        });

        await reposytoryClient.save(updatedClient);

        const ClientResponse = await serializerClient.validate(updatedClient, {
            stripUnknown: true,
        });

        return [200, ClientResponse]
    } else if (data.phone !== foundUserClient.phone && data.email !== foundUserClient.email && data.name !== foundUserClient.name) {
        const foundUserClientEmail = await reposytoryClient.findOne({
            where: {
                email: data.email,
            },
        });

        const foundUserClientphone = await reposytoryClient.findOne({
            where: {
                phone: data.phone
            },
        });

        if (foundUserClientEmail) {
            return [409, { "message": "Client alredy exists!" }]
        }

        if (foundUserClientphone) {
            return [409, { "message": "Client phone alredy exists!" }]
        }

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

}

export { userUuidPatchService }