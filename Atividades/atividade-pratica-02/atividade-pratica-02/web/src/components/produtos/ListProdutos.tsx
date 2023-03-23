import { useEffect, useState } from "react";
import { isMetaProperty } from "typescript";
import api from "../../services/api";

interface ProdutoModel {
    id: number;
    etiqueta: string;
    validade: string;
    doacao_id: number;
}

const ListProdutos = () => {

    const [ produtos, setProdutos ] = useState<ProdutoModel[]>([]);
    
    useEffect(() => {
        api.get('/produtos')
            .then(response => {
                setProdutos(response.data);
            });
    });

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Etiqueta</th>
                        <th>Validade</th>
                        <th>DoacaoId</th>
                    </tr>
                </thead>

                <tbody>
                    { produtos.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.etiqueta}</td>
                            <td>{item.validade}</td>
                            <td>{item.doacao_id}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default ListProdutos;