import { userGetEmailService } from "../services/userGetEmailService.service"


const userGetEmailController = async (req, res) => {
    const reqBody = req.params.email

    const [status, data] = await userGetEmailService(reqBody)
    console.log(status, data)
    return res.status(status).json(data)
}

export { userGetEmailController }