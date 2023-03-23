import { useEffect, useState } from "react";
import api from "../../services/api";

interface UnidadeModel {
    id: number;
    nome: string;
    numero: string;
    complemento: string;
    cidade_id: number;
}

const ListUnidades = () => {

    const [ unidades, setUnidades ] = useState<UnidadeModel[]>([]);

    useEffect(() => {
        api.get('/unidades')
            .then(response => {
                setUnidades(response.data);
            });
    });

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Número</th>
                        <th>Complemento</th>
                        <th>CidadeId</th>
                    </tr>
                </thead>

                <tbody>
                    { unidades.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.numero}</td>
                            <td>{item.complemento}</td>
                            <td>{item.cidade_id}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default ListUnidades;