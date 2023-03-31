import { deleteContactsUuidService } from "../services/deleteContactsUuidService.service"



const deleteContactsUuidController = async (req, res) => {
    const idContact = req.params.uuid.replace(':', '')

    const [status, data] = await deleteContactsUuidService( idContact)


    return res.status(status).json(data)
}

export { deleteContactsUuidController }