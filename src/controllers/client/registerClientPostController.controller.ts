import { registerClientPostService } from "../../services"

const registerClientPostController = async (req, res) => {
    const reqData = req.body
    const [status, data] = await registerClientPostService(reqData)

    return res.status(status).json(data)
}

export { registerClientPostController }