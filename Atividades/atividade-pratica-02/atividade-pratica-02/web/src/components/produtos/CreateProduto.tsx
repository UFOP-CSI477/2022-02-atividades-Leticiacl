import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateProduto = () => {

    const navigate = useNavigate();

    const [ etiqueta, setEtiqueta ] = useState('');
    const [ validade, setValidade ] = useState('');
    const [ doacaoId, setDoacaoId ] = useState(0);

    const handleNewProduto = async(event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            etiqueta,
            validade,
            doacao_id: doacaoId
        }

        try {
            await api.post('/produtos', data);
            navigate('/produtos');

        } catch (error) {
            alert('Erro ao cadastrar o produto.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Produto</h3>

            <form onSubmit={handleNewProduto}>

                <div>
                    <label htmlFor="etiqueta">Etiqueta</label>
                    <input 
                        type="text" 
                        name="etiqueta" 
                        id="etiqueta"
                        value={etiqueta}
                        onChange={event => setEtiqueta(event.target.value)} 
                        placeholder='Etiqueta do produto'
                    />
                </div>

                <div>
                    <label htmlFor="validade">Validade</label>
                    <input 
                        type="text" 
                        name="validade" 
                        id="validade" 
                        value={validade}
                        onChange={event => setValidade(event.target.value)}
                        placeholder='Validade do produto'
                    />
                </div>

                <div>
                    <label htmlFor="doacaoId">DoacaoId</label>
                    <input 
                        type="text" 
                        name="doacaoId" 
                        id="doacaoId" 
                        value={doacaoId}
                        onChange={event => setDoacaoId(parseInt(event.target.value))}
                        placeholder='ID da doação'
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
                
            </form>

        </div>
    )
}

export default CreateProduto;