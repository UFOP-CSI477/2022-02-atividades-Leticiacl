import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";

const UpdateEstado = () => {

    // State -> armazena os dados dos Estados (uf)
    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    const { id } = useParams();

    const navigate = useNavigate();

    // Effect -> carrega os dados atuais dos Estados
    useEffect(() => {
        api.get(`/estados/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setSigla(response.data.sigla);
            })
    }, [id]);

    const handleUpdateEstado = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const intId = parseInt(String(id));

        const data = {
            id: intId,
            nome,
            sigla
        }

        try {
            await api.put('/estados', data);
            navigate('/estados');

        } catch (error) {
            alert('Erro ao atualizar o Estado.');
            console.error(error);
        }

    }

    return(

        <div>
            <h3>Atualizar Estado: {nome} - {sigla}</h3>

            <form onSubmit={handleUpdateEstado}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder='Nome do Estado'
                    />
                </div>

                <div>
                    <label htmlFor="sigla">Sigla</label>
                    <input 
                        type="text" 
                        name="sigla" 
                        id="sigla"
                        value={sigla}
                        onChange={event => setSigla(event.target.value)} 
                        placeholder='Sigla do Estado/UF'
                    />
                </div>

                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );
}

export default UpdateEstado;