import { useEffect, useState } from "react";
import { CidadeModel } from '../cidades/ListCidades';
import api from "../../services/api";

interface PessoaModel {
    id: number;
    nome: string;
    cidade_id: number;
    cidade: CidadeModel;
    tipo_sanguineo_id: number
}

const ListPessoas = () => {

    // State -> armazena os dados das pessoas
    const [ pessoas, setPessoas ] = useState<PessoaModel[]>([]);

    // Effect -> carrega os dados das pessoas
    useEffect(() => {
        api.get('/pessoas')
            .then(response => {
                setPessoas(response.data);
            });
    }, []);

    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade ID</th>
                        <th>Tipo Sanguíneo ID</th>
                    </tr>
                </thead>

                <tbody>
                    { pessoas.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cidade_id}</td>
                            <td>{item.tipo_sanguineo_id}</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default ListPessoas;