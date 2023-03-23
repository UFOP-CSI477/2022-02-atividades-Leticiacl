import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateEstado = () => {

    // State -> armazena os dados dos estados (uf)
    const [ nome, setNome ] = useState('');
    const [ sigla, setSigla ] = useState('');

    const navigate = useNavigate();

    const handleNewEstado = async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const validateNome = () => {
            if(nome === '') {
                alert('Informe o nome do Estado.');
                document.getElementById('nome')?.focus();
                return false;
            }
            return true;
        }

        const validateSigla = () => {
            if(sigla === '') {
                alert('Informa a sigla/UF do Estado.');
                document.getElementById('sigla')?.focus();
                return false;
            }
            return true;
        }

        if(!validateNome() || !validateSigla()) {
            return false;
        }

        const data = {
            nome,
            sigla
        }

        try {
            await api.post('/estados', data);
            alert('Estado inserido com sucesso.');
            navigate('/estados');
        } catch (error) {
            alert('Erro ao cadastrar o estado.');
            console.log(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Estado: {nome}-{sigla}</h3>

            <form onSubmit={handleNewEstado}>

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

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>

        </div>
    );
}

export default CreateEstado;