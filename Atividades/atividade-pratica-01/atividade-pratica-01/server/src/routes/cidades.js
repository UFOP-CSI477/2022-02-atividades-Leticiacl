import { Router } from 'express';
import { CreateCidadeController } from '../controllers/cidades/CreateCidadeController.js';
import { GetAllCidadesController } from '../controllers/cidades/GetAllCidadesController.js';
import { GetCidadeByIdController } from '../controllers/cidades/GetCidadeByIdController.js';
import { UpdateCidadeController } from '../controllers/cidades/UpdateCidadeController.js';
import { DeleteCidadeController } from '../controllers/cidades/DeleteCidadeController.js';

const cidadeRouter = Router();

const createCidadeController = new CreateCidadeController();
const getAllCidadesController = new GetAllCidadesController();
const getCidadeByIdController = new GetCidadeByIdController();
const updateCidadeController = new UpdateCidadeController();
const deleteCidadeController = new DeleteCidadeController();

cidadeRouter.post('/cidades', createCidadeController.handle);
cidadeRouter.get('/cidades', getAllCidadesController.handle);
cidadeRouter.get('/cidades/:id', getCidadeByIdController.handle);
cidadeRouter.put('/cidades', updateCidadeController.handle);
cidadeRouter.delete('/cidades', deleteCidadeController.handle);

export { cidadeRouter }