import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateTipoSanguineo = () => {

    const navigate = useNavigate();

    const [ tipo, setTipo ] = useState('');
    const [ fator, setFator ] = useState('');

    const handleNewTipoSanguineo = async(event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const data = {
            tipo,
            fator
        }

        try {
            await api.post('/tipos-sanguineos', data);
            navigate('/tipos-sanguineos');

        } catch (error) {
            alert('Erro ao cadastrar o tipo sanguíneo.');
            console.error(error);
        }
    }

    return (

        <div>
            <h3>Cadastrar Tipo Sanguíneo</h3>

            <form onSubmit={handleNewTipoSanguineo}>
                
                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input 
                        type="text" 
                        name="tipo" 
                        id="tipo" 
                        value={tipo} 
                        onChange={event => setTipo(event.target.value)}
                        placeholder='A, B, AB ou O?'
                    />
                </div>

                <div>
                    <label htmlFor="fator">Fator</label>
                    <input 
                        type="text" 
                        name="fator" 
                        id="fator" 
                        value={fator}
                        onChange={event => setFator(event.target.value)}
                        placeholder='Positivo ou negativo?'
                    />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>

            </form>
        </div>
    );
}

export default CreateTipoSanguineo;