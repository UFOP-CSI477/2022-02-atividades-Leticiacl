import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateDistribuicao = () => {
    
    const navigate = useNavigate();

    const [ produtoId, setProdutoId ] = useState(0);
    const [ unidadeId, setUnidadeId ] = useState(0);
    const [ data, setData ] = useState('');

    const handleNewDistribuicao = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const obj = {
            produto_id: produtoId,
            unidade_id: unidadeId,
            data
        }

        try {
            await api.post('/distribuicoes', obj);
            navigate('/distribuicoes');

        } catch (error) {
            alert('Erro ao cadastrar a distribuição.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Distribuição</h3>

            <div>
                <label htmlFor="produtoId">ProdutoId</label>
                <input 
                    type="text" 
                    name="produtoId" 
                    id="produtoId" 
                    value={produtoId}
                    onChange={event => setProdutoId(parseInt(event.target.value))}
                    placeholder="ID do produto"
                />
            </div>

            <div>
                <label htmlFor="unidadeId">UnidadeId</label>
                <input 
                    type="text" 
                    name="unidadeId" 
                    id="unidadeId" 
                    value={unidadeId}
                    onChange={event => setUnidadeId(parseInt(event.target.value))}
                    placeholder="ID da unidade"
                />
            </div>

            <div>
                <label htmlFor="data">Data</label>
                <input 
                    type="text" 
                    name="data" 
                    id="data" 
                    value={data}
                    onChange={event => setData(event.target.value)}
                    placeholder="Data da distribuição"
                />
            </div>

            <button type="submit">Cadastrar</button>

        </div>
    )
}

export default CreateDistribuicao;