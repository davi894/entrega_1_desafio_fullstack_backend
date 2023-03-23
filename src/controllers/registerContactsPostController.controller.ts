import { registerContactsPostService } from "../services"

const registerContactsPostController = async (req, res) => {
    const reqData = req.body
    const userId = req.user.id
    const [status, data] = await registerContactsPostService(reqData, userId)

    return res.status(status).json(data)
}

export { registerContactsPostController }