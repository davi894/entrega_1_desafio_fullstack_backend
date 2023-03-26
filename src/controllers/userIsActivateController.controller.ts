import { userIsActivateService } from "../services/userIsActivateService.service"

const userIsActivateController = async (req, res) => {
    const reqBody = req.body

    const [status, data] = await userIsActivateService(reqBody)
    return res.status(status).json(data)
}

export { userIsActivateController }