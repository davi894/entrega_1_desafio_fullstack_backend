import { userUuidDeletService } from "../services"

const userUuidDeletController = async (req, res) => {
    const reqParams = req.user.id
    
    const [status, data] = await userUuidDeletService(reqParams)

    if (status === 204) {
        return res.status(status).json()
    }
    return res.status(status).json(data)
}

export { userUuidDeletController }