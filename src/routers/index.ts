import { Router } from "express";
import {
    loginClientPostController,
    registerContactsPostController,
    registerClientPostController,
    userGetController,
    userUuidDeletController,
    userUuidPatchController,
    listContactsController,
    listContactsUuidController,
    deleteContactsUuidController,
    updateContactsUuidController,
} from "../controllers";
import { ensureAuthMiddleware, verifyClientMiddleware } from "../middlewares";

const usersRoutes = Router();

usersRoutes.post("/register", registerClientPostController)
usersRoutes.post("/login", loginClientPostController)


usersRoutes.get("/user", ensureAuthMiddleware, userGetController)

usersRoutes.post("/register/contacts", ensureAuthMiddleware, verifyClientMiddleware, registerContactsPostController)
usersRoutes.get("/list/contacts", ensureAuthMiddleware, verifyClientMiddleware, listContactsController)
usersRoutes.get("/list/contact/:uuid", ensureAuthMiddleware, verifyClientMiddleware, listContactsUuidController)
usersRoutes.delete("/contact/:uuid", ensureAuthMiddleware, verifyClientMiddleware, deleteContactsUuidController)
usersRoutes.patch("/contact/:uuid", ensureAuthMiddleware, verifyClientMiddleware, updateContactsUuidController)
usersRoutes.patch("/user", ensureAuthMiddleware, verifyClientMiddleware, userUuidPatchController)
usersRoutes.delete("/user", ensureAuthMiddleware, verifyClientMiddleware, userUuidDeletController)


export { usersRoutes }