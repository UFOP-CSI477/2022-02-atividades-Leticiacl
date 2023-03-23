import { prismaClient } from "../../database/client.js";

export class GetAllUnidadesController {

    async handle(request, response) {

        const unidades = await prismaClient.unidade.findMany();

        return response.json(unidades);
    }
}