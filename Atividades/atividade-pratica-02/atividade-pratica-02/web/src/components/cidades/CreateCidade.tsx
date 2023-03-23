import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { EstadoModel } from "../estados/ListEstados";
import SelectEstados from "../estados/SelectEstados";

const CreateCidade = () => {

    const navigate = useNavigate();

    // State -> armazena os dados das cidades
    const [ nome, setNome ] = useState('');
    const [ estadoId, setEstadoId ] = useState(0);

    const [ estados, setEstados ] = useState<EstadoModel[]>([]);

    // Effect -> carrega os dados dos Estados
    useEffect(() => {
        api.get('/estados')
            .then(response => {
                setEstados(response.data);
            })
    }, []);

    const handleNewCidade = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            estado_id: estadoId
        }

        try {
            await api.post('/cidades', data);
            navigate('/cidades');

        } catch (error) {
            alert('Erro ao cadastrar a cidade.');
            console.error(error);
        }
    }

    return(

        <div>
            <h3>Cadastrar Cidade</h3>

            <form onSubmit={handleNewCidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder='Nome da cidade' 
                    />
                </div>

                <div>
                    <label htmlFor="EstadoId">EstadoId</label>
                    <input 
                        type="text" 
                        name="estadoId" 
                        id="estadoId"
                        value={estadoId}
                        onChange={event => setEstadoId(parseInt(event.target.value))}
                        placeholder='Estado ID da cidade' 
                    />
                </div>

                <div>
                    <select 
                        name="estado" 
                        id="estado"
                        value={estadoId}
                        onChange={event => setEstadoId(parseInt(event.target.value))}
                    >
                        <option value="0" selected>Selecione</option>

                        {
                            estados.map(item => (
                                <option value={item.id}>{item.nome}</option>
                            ))
                        }
                    </select>
                </div>

                {/* <SelectEstados
                    id={estadoId}
                    setId={setEstadoId} 
                /> */}

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );
}

export default CreateCidade;