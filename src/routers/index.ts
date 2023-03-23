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
    userGetEmailController

} from "../controllers";
import { ensureAuthMiddleware, verifyClientMiddleware } from "../middlewares";

const usersRoutes = Router();

usersRoutes.post("/register", registerClientPostController) // funciona

usersRoutes.post("/login/client", loginClientPostController) //funciona

usersRoutes.post("/login/contact", loginContactPostController) //funciona

usersRoutes.get("/user", ensureAuthMiddleware, userGetController) //funciona

usersRoutes.get("/user/found/:email", userGetEmailController) //funciona

usersRoutes.post("/register/contacts", ensureAuthMiddleware, verifyClientMiddleware, registerContactsPostController) //funciona

usersRoutes.get("/list/contacts", ensureAuthMiddleware, verifyClientMiddleware, listContactsController) //funciona
usersRoutes.get("/list/contact/:uuid", ensureAuthMiddleware, verifyClientMiddleware, listContactsUuidController) //funciona

usersRoutes.patch("/user", ensureAuthMiddleware, userUuidPatchController) //funciona
usersRoutes.delete("/user", ensureAuthMiddleware, userUuidDeletController) //funciona

export { usersRoutes }