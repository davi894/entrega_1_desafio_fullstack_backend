import { updateContactsUuidService } from "../services/updateContactsUuidService.service"


const updateContactsUuidController = async (req, res) => {
    const reqData = req.body
    const contactId = req.params.uuid
    const clientId = req.user.id
   
    const [status, data] = await updateContactsUuidService(reqData, contactId, clientId)
    
    return res.status(status).json(data)

}

export { updateContactsUuidController }