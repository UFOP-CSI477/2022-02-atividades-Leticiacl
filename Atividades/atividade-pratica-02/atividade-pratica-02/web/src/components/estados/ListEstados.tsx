import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';

export interface EstadoModel {
    id: number;
    nome: string;
    sigla: string;
    created_at: string;
}

const ListEstados = () => {

    // Hooks
    // State -> armazena os dados dos estados (uf)
    const [ estados, setEstados ] = useState<EstadoModel[]>([]);

    // Effect -> carrega os dados
    useEffect(() => {
        loadData();
    },[]);

    // componente -> effect -> state -> render()

    const loadData = () => {

        api.get('/estados')
            .then(response => {
                // atualizar o state
                console.log(response.data);
                setEstados(response.data);
            })
    }

    return(
    
        <div>
            <h2>Lista de Estados</h2>
    
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Criação</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    { estados.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.created_at}</td>
                            <td><Link to={`/estados/show/${item.id}`}>Visualizar</Link></td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    );
}

export default ListEstados;