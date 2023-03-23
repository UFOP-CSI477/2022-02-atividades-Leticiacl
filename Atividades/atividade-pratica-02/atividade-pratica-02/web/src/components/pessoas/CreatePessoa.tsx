import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";
import { TipoSanguineoModel } from "../tipos_sanguineos/ListTiposSanguneos";

const CreatePessoa = () => {

    const navigate = useNavigate();

    // State -> armazena os dados de uma pessoa
    const [ nome, setNome ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);
    const [ tipoSanguineoId, setTipoSanguineoId ] = useState(0);

    const [ cidades, setCidades ] = useState<CidadeModel[]>([]);
    const [ tipoSanguineo, setTipoSanguineo ] = useState<TipoSanguineoModel[]>([]);

    // effect -> carrega os dados das cidades
    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            });
    });

    // effect -> carrega os dados dos tipos sanguineos
    useEffect(() => {
        api.get('/tipos-sanguineos')
            .then(response => {
                setTipoSanguineo(response.data);
            });
    });

    const handleNewPessoa = async(event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            cidade_id: cidadeId,
            tipo_sanguineo_id: tipoSanguineoId
        }

        try {
            await api.post('/pessoas', data);
            navigate('/pessoas');

        } catch (error) {
            alert('Erro ao cadastrar a pessoa.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Pessoa</h3>

            <form onSubmit={handleNewPessoa}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={ event => setNome(event.target.value) }
                        placeholder='Nome da pessoa'
                    />
                </div>

                <div>
                    <label htmlFor="cidadeId">CidadeId</label>
                    <input 
                        type="text" 
                        name="cidadeId" 
                        id="cidadeId" 
                        value={cidadeId}
                        onChange={ event => setCidadeId(parseInt(event.target.value)) }
                        placeholder='ID da cidade'
                    />
                </div>

                <div>
                    <label htmlFor="tipoSanguineoId"></label>
                    <input 
                        type="text" 
                        name="tipoSanguineoId" 
                        id="tipoSanguineoId"
                        value={tipoSanguineoId}
                        onChange={event => setTipoSanguineoId(parseInt(event.target.value))}
                        placeholder='ID do tipo sanguíneo'
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );
}

export default CreatePessoa;