import { prismaClient } from "../../database/client.js";

export class CreateUnidadeController {

    async handle(request, response) {

        const { nome, numero, complemento, cidade_id } = request.body;

        const unidade = await prismaClient.unidade.create({
            data: {
                nome,
                numero,
                complemento,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                }
            }
        });

        return response.json(unidade);
    }
}