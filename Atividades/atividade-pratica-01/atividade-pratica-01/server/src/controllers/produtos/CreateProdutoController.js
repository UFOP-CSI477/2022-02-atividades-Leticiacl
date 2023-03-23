import { prismaClient } from '../../database/client.js'

export class CreateProdutoController {

    async handle(request, response) {

        const { etiqueta, doacao_id, validade } = request.body;

        const produto = await prismaClient.produto.create({
            data: {
                etiqueta,
                validade,
                doacao: {
                    connect: {
                        id: doacao_id
                    }
                },
            }
        });

        return response.json(produto);
    }
}