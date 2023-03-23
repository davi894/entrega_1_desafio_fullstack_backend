import { AppDataSource } from "../data-source";
import { Client } from "../database/entities/client";
import { serializerClient } from "../serializers/user";

const registerClientPostService = async (data) => {

    const reposytoryClient = AppDataSource.getRepository(Client);

    const foundUserClient = await reposytoryClient.findOne({
        where: {
            email: data.email,
            phone: data.phone
        },
    });

    if (foundUserClient) {
        return [409, { "message": "Client alredy exists!" }]
    }

    const newClient = reposytoryClient.create(data);
    await reposytoryClient.save(newClient);

    const newClientResponse = await serializerClient.validate(newClient, {
        stripUnknown: true,
    });

    return [200, newClientResponse]

}

export { registerClientPostService }