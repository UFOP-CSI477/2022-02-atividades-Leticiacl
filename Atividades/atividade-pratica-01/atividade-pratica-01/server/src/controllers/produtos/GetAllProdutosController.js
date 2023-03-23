import { prismaClient } from "../../database/client.js";

export class GetAllProdutosController {

    async handle(request, response) {

        const produtos = await prismaClient.produto.findMany();

        return response.json(produtos);
    }
}