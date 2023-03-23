import { prismaClient } from "../../database/client.js";

export class CreateDistribuicaoController {

    async handle(request, response) {

        const { produto_id, unidade_id, data } = request.body;

        const distribuicoes = await prismaClient.distribuicao.create({
            data: {
                data,
                produto: {
                    connect: {
                        id: produto_id
                    }
                },
                unidade: {
                    connect: {
                        id: unidade_id
                    }
                }
            }
        });

        return response.json(distribuicoes);
    }
}