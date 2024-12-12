import {Router} from "express";
import { UserController } from "./user.controller";
import { isLogin } from "../../middleware/auth";






const router = Router();


router.get('/get-user-data',isLogin, UserController.getUserData)


export const UserRoutes = router;
