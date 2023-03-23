import { prismaClient } from '../../database/client.js';

export class CreatePessoaController {

    async handle(request, response) {

        const { nome, cidade_id, tipo_sanguineo_id } = request.body;

        const pessoa = await prismaClient.pessoa.create({
            data: {
                nome,
                cidade: {
                    connect: {
                        id: cidade_id
                    }
                },
                tipo_sanguineo: {
                    connect: {
                        id: tipo_sanguineo_id
                    }
                }
            }
        });

        return response.json(pessoa);
    }
}