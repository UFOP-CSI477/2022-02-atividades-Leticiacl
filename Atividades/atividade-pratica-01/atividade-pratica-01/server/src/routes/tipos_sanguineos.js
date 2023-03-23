import { Router } from "express";
import { GetAllTiposSanguineosController } from "../controllers/tipos_sanguineos/GetAllTiposSanguineosController.js";
import { CreateTipoSanguineoController } from "../controllers/tipos_sanguineos/CreateTipoSanguineoController.js";

const sangueRouter = Router();

const getAllTiposSanguineoController = new GetAllTiposSanguineosController();
const createTipoSanguineoController = new CreateTipoSanguineoController();

sangueRouter.get('/tipos-sanguineos', getAllTiposSanguineoController.handle);
sangueRouter.post('/tipos-sanguineos', createTipoSanguineoController.handle);


export { sangueRouter }