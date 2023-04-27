import { listContactsService } from "../../services/contact/listContactsService.service"


const listContactsController = async (req, res) => {
    const reqData = req.body
    const userId = req.user.id
    const [status, data] = await listContactsService(userId)

    return res.status(status).json(data)
}
export { listContactsController }