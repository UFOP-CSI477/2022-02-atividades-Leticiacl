import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../services/api";
import { CidadeModel } from "./ListCidades";

const ShowCidade = () => {

    // State -> ARMAZENA os dados das cidades
    const [ cidade, setCidade ] = useState<CidadeModel>();

    const { id } = useParams();

    // Effect -> CARREGA os dados das cidades
    useEffect(() => {
        api.get(`/cidades/${id}`)
            .then(response => {
                setCidade(response.data)
            })
    }, [id]);

    return(

        <div>
            <h2>Dados da Cidade</h2>

            <p>Id: {cidade?.id}</p>
            <p>Nome: {cidade?.nome}</p>
            <p>Estado: {cidade?.estado.nome}</p>
            <p>Data de inserção: {cidade?.created_at}</p>

            <div>
                <Link to={`/cidades/update/${cidade?.id}`}>Atualizar</Link>
            </div>
        </div>
    )
}

export default ShowCidade;