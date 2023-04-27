import { loginClientPostService } from "../../services"

const loginClientPostController = async (req, res) => {
    const reqData = req.body
    const [status, data] = await loginClientPostService(reqData)
    return res.status(status).json(data)
}

export { loginClientPostController }