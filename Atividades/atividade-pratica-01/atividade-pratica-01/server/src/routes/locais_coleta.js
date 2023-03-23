import { Router } from "express";
import { GetAllLocaisColetaController } from "../controllers/locais_coleta/GetAllLocaisColetaController.js";
import { CreateLocalColetaController } from "../controllers/locais_coleta/CreateLocalColetaController.js";

const localRouter = Router();

const getAllLocaisColetaController = new GetAllLocaisColetaController();
const createLocalColetaController = new CreateLocalColetaController();

localRouter.get('/locais-coleta', getAllLocaisColetaController.handle);
localRouter.post('/locais-coleta', createLocalColetaController.handle);

export { localRouter }