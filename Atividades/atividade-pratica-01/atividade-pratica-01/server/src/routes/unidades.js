import { Router } from "express";
import { CreateUnidadeController } from "../controllers/unidades/CreateUnidadeController.js";
import { GetAllUnidadesController } from "../controllers/unidades/GetAllUnidadesController.js";

const createUnidadeController = new CreateUnidadeController();
const getAllUnidadesController = new GetAllUnidadesController();

const unidadeRouter = Router();

unidadeRouter.post('/unidades', createUnidadeController.handle);
unidadeRouter.get('/unidades', getAllUnidadesController.handle);

export { unidadeRouter }