import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "../cidades/ListCidades";

const CreateLocalColeta = () => {

    const navigate = useNavigate();

    const [ nome, setNome ] = useState('');
    const [ cidadeId, setCidadeId ] = useState(0);

    const [ cidades, setCidades ] = useState<CidadeModel[]>([]);

    useEffect(() => {
        api.get('/cidades')
            .then(response => {
                setCidades(response.data);
            });
    });

    const handleNewLocalColeta = async(event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            nome,
            cidade_id: cidadeId
        }

        try {
            await api.post('/locais-coleta', data);
            navigate('/locais-coleta');

        } catch (error) {
            alert('Erro ao cadastrar o local de coleta.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Local de Coleta</h3>

            <form onSubmit={handleNewLocalColeta}>

                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        value={nome}
                        onChange={ event => setNome(event.target.value) } 
                        placeholder='Nome do local de coleta'
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
                        placeholder='ID da cidade'
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    )
}

export default CreateLocalColeta;