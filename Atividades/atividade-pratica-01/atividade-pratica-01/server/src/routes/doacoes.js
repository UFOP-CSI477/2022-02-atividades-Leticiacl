import { Router } from "express";
import { GetAllDoacoesController } from "../controllers/doacoes/GetAllDoacoesController.js";
import { CreateDoacaoController } from "../controllers/doacoes/CreateDoacaoController.js";

const doacaoRouter = Router();

const getAllDoacoesController = new GetAllDoacoesController();
const createDoacaoController = new CreateDoacaoController();

doacaoRouter.get('/doacoes', getAllDoacoesController.handle);
doacaoRouter.post('/doacoes', createDoacaoController.handle);

export { doacaoRouter }