import { useEffect, useState } from "react";
import api from "../../services/api";

export interface TipoSanguineoModel {
    id: number;
    tipo: string;
    fator: string;
}

const ListTipoSanguineos = () => {

    const [ tiposSanguineos, setTiposSanguineos ] = useState<TipoSanguineoModel[]>([]);

    useEffect(() => {
        api.get('/tipos-sanguineos')
            .then(response => {
                setTiposSanguineos(response.data);
            });
    });

    return (

        <div>
            <table>

                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Fator</th>
                    </tr>
                </thead>

                <tbody>
                    {tiposSanguineos.map(item => (
                        <tr>
                            <td>{item.tipo}</td>
                            <td>{item.fator}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default ListTipoSanguineos;