import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateUnidade = () => {

    const navigate = useNavigate();

    const [ nome, setNome ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ complemento, setComplemento ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);

    const handleNewUnidade = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            numero,
            complemento,
            cidade_id: cidadeId
        }

        try {
            await api.post('/unidades', data);
            navigate('/unidades')

        } catch (error) {
            alert('Erro ao cadastrar a unidade.');
            console.error(error);
        }        
    }

    return (

        <div>
            <h3>Cadastrar Unidade</h3>

            <form onSubmit={handleNewUnidade}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        value={nome}
                        onChange={event => setNome(event.target.value)}
                        placeholder="Nome da unidade"
                    />
                </div>

                <div>
                    <label htmlFor="numero">Número</label>
                    <input 
                        type="text" 
                        name="numero" 
                        id="numero" 
                        value={numero}
                        onChange={event => setNumero(event.target.value)}
                        placeholder="Número da unidade"
                    />
                </div>

                <div>
                    <label htmlFor="complemento">Complemento</label>
                    <input 
                        type="text" 
                        name="complemento" 
                        id="complemento" 
                        value={complemento}
                        onChange={event => setComplemento(event.target.value)}
                        placeholder="Complemento da unidade"
                    />
                </div>

                <div>
                    <label htmlFor="cidadeId">CidadeId</label>
                    <input 
                        type="text" 
                        name="cidadeId" 
                        id="cidadeId" 
                        value={cidadeId}
                        onChange={event => setCidadeId(parseInt(event.target.value))}
                        placeholder="ID da cidade"
                    />
                </div>

                <button type="submit">Cadastrar</button>
                
            </form>
        </div>
    )
}

export default CreateUnidade;