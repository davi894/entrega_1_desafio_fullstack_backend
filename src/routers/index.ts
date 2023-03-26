import { Router } from "express";
import {
    loginClientPostController,
    registerContactsPostController,
    registerClientPostController,
    loginContactPostController,
    userGetController,
    userUuidDeletController,
    userUuidPatchController,
    listContactsController,
    listContactsUuidController,
    userGetEmailController,
    userIsActivateController

} from "../controllers";
import { ensureAuthMiddleware, verifyClientMiddleware } from "../middlewares";

const usersRoutes = Router();

usersRoutes.post("/register", registerClientPostController) 

usersRoutes.post("/login/client", loginClientPostController) 

usersRoutes.post("/login/contact", loginContactPostController) 

usersRoutes.get("/user", ensureAuthMiddleware, userGetController) 

usersRoutes.get("/user/found/:email", userGetEmailController) 

usersRoutes.post("/register/contacts", ensureAuthMiddleware, verifyClientMiddleware, registerContactsPostController) 

usersRoutes.get("/list/contacts", ensureAuthMiddleware, verifyClientMiddleware, listContactsController) 
usersRoutes.get("/list/contact/:uuid", ensureAuthMiddleware, verifyClientMiddleware, listContactsUuidController)

usersRoutes.patch("/user", ensureAuthMiddleware, userUuidPatchController) 
usersRoutes.patch("/user/is_activate",  userIsActivateController) 

usersRoutes.delete("/user", ensureAuthMiddleware, userUuidDeletController) 

export { usersRoutes }