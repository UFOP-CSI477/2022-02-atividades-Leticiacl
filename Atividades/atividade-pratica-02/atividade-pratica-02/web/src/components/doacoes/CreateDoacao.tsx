import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateDoacao = () => {
    
    const navigate = useNavigate();

    const [ pessoaId, setPessoaId ] = useState(0);
    const [ localId, setLocalId ] = useState(0);

    const handleNewDoacao = async(event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        const data = {
            pessoa_id: pessoaId,
            local_id: localId
        }

        try {
            await api.post('/doacoes', data);
            navigate('/doacoes');

        } catch (error) {
            alert('Erro ao cadastrar a doação.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Doação</h3>

            <form onSubmit={handleNewDoacao}>
                
                <div>
                    <label htmlFor="pessoaId">PessoaId</label>
                    <input 
                        type="number" 
                        name="pessoaId" 
                        id="pessoaId"
                        value={pessoaId} 
                        onChange={event => setPessoaId(parseInt(event.target.value))}
                        placeholder='ID da pessoa'
                    />
                </div>

                <div>
                    <label htmlFor="localId">LocalId</label>
                    <input 
                        type="number" 
                        name="localId" 
                        id="localId" 
                        value={localId}
                        onChange={event => setLocalId(parseInt(event.target.value))}
                        placeholder='ID do local'
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>            

        </div>
    );
}

export default CreateDoacao;