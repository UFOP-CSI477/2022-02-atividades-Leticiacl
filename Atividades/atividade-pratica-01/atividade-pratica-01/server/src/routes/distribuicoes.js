import { Router } from "express";
import { CreateDistribuicaoController } from "../controllers/distribuicoes/CreateDistribuicaoController.js";
import { GetAllDistribuicoesController } from "../controllers/distribuicoes/GetAllDistribuicoesController.js";

const distribuicaoRouter = Router();

const createDistribuicaoController = new CreateDistribuicaoController();
const getAllDistribuicoesController = new GetAllDistribuicoesController();

distribuicaoRouter.post('/distribuicoes', createDistribuicaoController.handle);
distribuicaoRouter.get('/distribuicoes', getAllDistribuicoesController.handle);

export { distribuicaoRouter }