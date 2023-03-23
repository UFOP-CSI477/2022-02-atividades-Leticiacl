import { prismaClient } from "../../database/client.js";

export class GetAllPessoasController {

    async handle(request, response) {

        // const pessoas = await prismaClient.pessoa.findMany({
        //     include: {
        //         doacoes: {
        //             include: {
        //                 locais: {
        //                     select: {
        //                         nome
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });

        const pessoas = await prismaClient.pessoa.findMany();


        return response.json(pessoas);
    }
}