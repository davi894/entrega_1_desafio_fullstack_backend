import { listContactsController } from "./contact/listContactsController.controller";
import { loginClientPostController } from "./login/loginClientPostController.controller";
import { registerClientPostController } from "./client/registerClientPostController.controller";
import { registerContactsPostController } from "./contact/registerContactsPostController.controller";
import { listContactsUuidController } from "./contact/listContactsUuidController.controller";
import { userGetController } from "./user/userGetController.controller";
import { userUuidDeletController } from "./user/userUuidDeletController.controller";
import { userUuidPatchController } from "./user/userUuidPatchController.controller";
import { deleteContactsUuidController } from "./contact/deleteContactsUuidController.controller";
import { updateContactsUuidController } from "./contact/updateContactsUuidController.controller";

export {
    updateContactsUuidController,
    deleteContactsUuidController,
    listContactsUuidController,
    listContactsController,
    registerClientPostController,
    registerContactsPostController,
    loginClientPostController,
    userGetController,
    userUuidPatchController,
    userUuidDeletController,
}
