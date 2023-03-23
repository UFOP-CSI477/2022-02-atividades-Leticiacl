import { useEffect, useState } from "react";
import api from "../../services/api";

interface LocalColetaModel {
    id: number;
    nome: string;
    cidade_id: number;
}

const ListLocaisColeta = () => {

    const [ locaisColeta, setLocaisColeta ] = useState<LocalColetaModel[]>([]);

    useEffect(() => {
        api.get('/locais-coleta')
            .then(response => {
                setLocaisColeta(response.data);
            });
    });

    return (

        <div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CidadeId</th>
                    </tr>
                </thead>

                <tbody>
                    { locaisColeta.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cidade_id}</td>
                        </tr>
                    )) }
                </tbody>

            </table>

        </div>
    );
}

export default ListLocaisColeta;