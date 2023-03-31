import { userUuidPatchService } from "../services";

const userUuidPatchController = async (req, res) => {
    const reqData = req.body
    const userId = req.user.id;
    
    const [status, data] = await userUuidPatchService(reqData, userId)
    return res.status(status).json(data)
}

export { userUuidPatchController }