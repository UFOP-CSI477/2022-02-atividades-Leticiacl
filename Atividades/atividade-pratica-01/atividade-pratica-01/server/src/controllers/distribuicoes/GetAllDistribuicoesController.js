import { prismaClient } from "../../database/client.js";

export class GetAllDistribuicoesController {

    async handle(request, response) {

        const distribuicoes = await prismaClient.distribuicao.findMany();

        return response.json(distribuicoes);
    }
}