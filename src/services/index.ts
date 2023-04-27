import { loginClientPostService } from "./login/loginClientPostService.service";
import { registerClientPostService } from "./client/registerClientPostService.service";
import { registerContactsPostService } from "./contact/registerContactsPostService.service";
import { userGetService } from "./user/userGetService.service";
import { userUuidDeletService } from "./user/userUuidDeletService.service";
import { userUuidPatchService } from "./user/userUuidPatchService.service";



export {
    registerClientPostService,
    loginClientPostService,
    userGetService,
    userUuidPatchService,
    userUuidDeletService,
    registerContactsPostService,
}