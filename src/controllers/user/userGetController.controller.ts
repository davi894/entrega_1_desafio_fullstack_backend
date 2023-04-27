import { userGetService } from "../../services"

const userGetController = async (req, res) => {
    const clientId = req.user.id
    const [status, data] = await userGetService(clientId)
    return res.status(status).json(data)
}

export { userGetController }