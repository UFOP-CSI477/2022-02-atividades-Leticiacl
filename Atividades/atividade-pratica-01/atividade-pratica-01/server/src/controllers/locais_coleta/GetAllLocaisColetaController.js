import { prismaClient } from "../../database/client.js";

export class GetAllLocaisColetaController {

    async handle(request, response) {

        const locaisColeta = await prismaClient.local.findMany();

        return response.json(locaisColeta);
    }
}