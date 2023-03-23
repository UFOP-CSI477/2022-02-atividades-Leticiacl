import { useEffect, useState } from "react";
import api from "../../services/api";

interface DoacaoModel {
    id: number;
    pessoa_id: number;
    local_id: number;
}

const ListDoacoes = () => {

    const [ doacoes, setDoacoes ] = useState<DoacaoModel[]>([]);
    
    useEffect(() => {
        api.get('/doacoes')
            .then(response => {
                setDoacoes(response.data);
            });
    });

    return (

        <div>

            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>PessoaId</th>
                        <th>LocalId</th>
                    </tr>
                </thead>

                <tbody>
                    { doacoes.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.pessoa_id}</td>
                            <td>{item.local_id}</td>
                        </tr>
                    )) }
                </tbody>

            </table>

        </div>
    );
}

export default ListDoacoes;