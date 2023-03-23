import { useEffect, useState } from "react";
import api from "../../services/api";

interface DistribuicaoModel {
    id: number;
    produto_id: number;
    unidade_id: number;
    data: string;
}

const ListDistribuicoes = () => {

    const [ distribuicoes, setDistribuicoes ] = useState<DistribuicaoModel[]>([]);

    useEffect(() => {
        api.get('/distribuicoes')
            .then(response => {
                setDistribuicoes(response.data);
            });
    });

    return (

        <div>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ProdutoId</th>
                        <th>UnidadeId</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    { distribuicoes.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.produto_id}</td>
                            <td>{item.unidade_id}</td>
                            <td>{item.data}</td>
                        </tr>
                    )) }
                </tbody>

            </table>
        </div>
    );
}

export default ListDistribuicoes;