import { Router } from "express";
import { GetAllPessoasController } from "../controllers/pessoas/GetAllPessoasController.js";
import { CreatePessoaController } from "../controllers/pessoas/CreatePessoaController.js";

const pessoaRouter = Router();

const getAllPessoasController = new GetAllPessoasController();
const createPessoaController = new CreatePessoaController();

pessoaRouter.get('/pessoas', getAllPessoasController.handle);
pessoaRouter.post('/pessoas', createPessoaController.handle);

export { pessoaRouter }