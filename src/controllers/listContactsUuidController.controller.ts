import { listContactsUuidService } from "../services/listContactsUuidService.service"

const listContactsUuidController = async (req, res) => {
    const userId = req.user.id
    const paramId = req.params.uuid
    const [status, data] = await listContactsUuidService(userId, paramId)

    return res.status(status).json(data[0])
}

export { listContactsUuidController }