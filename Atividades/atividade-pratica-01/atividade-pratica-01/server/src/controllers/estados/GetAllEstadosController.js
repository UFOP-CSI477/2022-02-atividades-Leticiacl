import { prismaClient } from "../../database/client.js";

export class GetAllEstadosController {

    async handle(request, response) {

        const estados = await prismaClient.estado.findMany({
            include: {
                cidade: true
            }
        });

        return response.json(estados)
    }
}