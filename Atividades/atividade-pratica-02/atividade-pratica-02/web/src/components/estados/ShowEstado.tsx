import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "./ListEstados";
import { Link, useNavigate } from "react-router-dom";

const ShowEstado = () => {

    const { id } = useParams();

    // State -> armazena os dados dos estados (uf)
    const [ estado, setEstado ] = useState<EstadoModel>();
    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    // Effect -> carrega os dados
    useEffect(() => {
        
        api.get(`/estados/${id}`)
            .then(response => {
                setEstado(response.data);
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
    }, [id]);

    const navigate = useNavigate();

    const handleDeleteEstado = async() => {

        if(!window.confirm('Confirma exclusão do Estado?')) {
            return;
        }

        const data = {
            id
        }

        try {
            await api.delete('/estados/', {
                data: {
                    data
                }
            });
            navigate('/estados');

        } catch (error) {
            alert('Erro ao excluir o Estado.');
            console.error(error);
        }
    }

    return(

        <div>
            <h2>Dados do Estado: {id} - {nome} / {estado?.sigla}</h2>

            <p>Nome: {nome}</p>
            <p>Sigla: {sigla}</p>
            <p>Data de inserção: {estado?.created_at}</p>

            <div>
                <button onClick={handleDeleteEstado}>Excluir</button>
            </div>

            <div>
                <Link to={`/estados/update/${id}`}>Atualizar</Link>
            </div>
        </div>
    );
}

export default ShowEstado;