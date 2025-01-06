import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserRoutes } from "../modules/User/user.route";
import { ProductRoutes } from "../modules/Product/product.route";



const router : Router = Router();

const moduleRotes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path:'/product',
    route: ProductRoutes
  }
];

moduleRotes.forEach((route) => router.use(route.path, route.route));

export default router;
