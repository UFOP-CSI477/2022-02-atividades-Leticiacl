import { prismaClient } from "../../database/client.js";

export class GetAllDoacoesController {

    async handle(request, response) {

        const doacoes = await prismaClient.doacao.findMany({
            include: {
                local: true,
                pessoa: true
            }
        });

        return response.json(doacoes);
    }
}