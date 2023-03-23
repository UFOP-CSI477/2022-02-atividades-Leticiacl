import { Router } from "express";
import { CreateProdutoController } from "../controllers/produtos/CreateProdutoController.js";
import { GetAllProdutosController } from "../controllers/produtos/GetAllProdutosController.js";

const produtoRouter = Router();

const createProdutoController = new CreateProdutoController();
const getAllProdutosController = new GetAllProdutosController();

produtoRouter.post('/produtos', createProdutoController.handle);
produtoRouter.get('/produtos', getAllProdutosController.handle);

export { produtoRouter }