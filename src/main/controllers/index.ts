import Express, { Request, Response, Router } from "express";
import { dataSource } from "../../database/database.config";
import { User } from "../../modules/domain/user/user.entity";
import { userService } from "../services/domain/user/user.service";

export const router: Router = Router();

router.use("/users", userService.recuperarTodos);
router.use("/create/user", userService.criarUsuario);
router.use("/user/:id", userService.recuperarPorId);
