import { prismaClient } from "../../database/client.js";

export class CreateLocalColetaController {

    async handle(request, response) {

        const { nome, cidade_id } = request.body;

        const localColeta = await prismaClient.local.create({
            data: {
                nome,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }
        });

        return response.json(localColeta);
    }
}