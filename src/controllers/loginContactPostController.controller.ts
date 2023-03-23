import { loginContactPostService } from "../services"

const loginContactPostController = async (req, res) => {
    const reqData = req.body
    const [status, data] = await loginContactPostService(reqData)
    return res.status(status).json(data)
}

export { loginContactPostController }