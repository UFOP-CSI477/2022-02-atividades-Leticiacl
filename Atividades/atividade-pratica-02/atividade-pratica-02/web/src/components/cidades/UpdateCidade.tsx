import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import SelectEstados from "../estados/SelectEstados";

const UpdateCidade = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    // State -> ARMAZENA os dados das cidades
    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    // Effect -> CARREGA os dados das cidades
    useEffect(() => {
        api.get(`/cidades/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setEstadoId(response.data.estado.id);
            })
    }, [id]);

    const handleUpdateCidade = async(event : React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        const intId = parseInt(String(id));

        // Validações?

        const data = {
            id: intId,
            nome,
            estado_id: estadoId
        }

        try {
            await api.put('/cidades', data);
            navigate('/cidades');

        } catch (error) {
            window.alert('Erro ao atualizar a cidade');
            console.error(error);
        }
    }

    return(

        <div>
            <h3>Atualizar cidade: {nome}</h3>

            <form onSubmit={handleUpdateCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        name='nome'
                        id='nome'
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder='Nome da cidade' 
                    />
                </div>

                <SelectEstados
                    id={estadoId}
                    setId={setEstadoId}
                />

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>

        </div>
    );
}

export default UpdateCidade;