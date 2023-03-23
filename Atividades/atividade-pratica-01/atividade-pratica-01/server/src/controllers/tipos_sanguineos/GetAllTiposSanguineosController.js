import { prismaClient } from '../../database/client.js';

export class GetAllTiposSanguineosController {

    async handle(request, response) {

        const tipos_sanguineos = await prismaClient.sangue.findMany({
            include: {
                pessoas: true
            }
        });

        return response.json(tipos_sanguineos);
    }
}