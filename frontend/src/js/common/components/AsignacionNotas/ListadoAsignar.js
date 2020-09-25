import React, { Component } from 'react';
// import Selects from "./Selects";
// import PropTypes from 'prop-types';
// import { TableHeaderColumn } from 'react-bootstrap-table';
import Grid from '../Utils/Grid';
// import { standardActions } from '../Utils/Grid/StandardActionsTicket';
// import Cards from "./Cards";
import { renderField } from '../Utils/renderField/renderField';
import LoadMask from '../Utils/LoadMask/LoadMask';
import Listar from './ListadoNotas';
class ListadoAsignar extends Component {
    componentWillMount = () => {
        const { match, leerCursosAsignados } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            const datos = leerCursosAsignados(id);
            console.log('listadoAsignar ', datos);
        }
        console.log('los props', this.props);
    };

    render() {
        const {
            data,

            loader,
            // onPageChange,
            // onSortChange,
            // searchChange,
            // filtrar,
            // resetearBuscador,
            // SetResetearBuscador,
            // listar,
            // leer,
            ListadoAlumnosAsignados,
            me,
        } = this.props;

        let curso = ListadoAlumnosAsignados[0];
        console.log('Pruebando ', curso.idCurso.nombre);
        return (
            <React.Fragment>
                <h1>{curso.idCurso.nombre}</h1>
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Alumno Asignado</th>
                            <th>Punteo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListadoAlumnosAsignados.map((data) => (
                            <tr key={data.id}>
                                <td>
                                    {data.idUsuario.first_name +
                                        ' ' +
                                        data.idUsuario.last_name}
                                </td>
                                <td>
                                    <input
                                        name="punteo"
                                        type="text"
                                        component={renderField}
                                    />
                                </td>
                            </tr>
                        ))}

                        {/* {submitFailed && error && (
                            <tr>
                                <td colSpan={2}>{error}</td>
                            </tr>
                        )} */}

                        {/* {ListadoAlumnosAsignados.map((data) => (
                        <Listar
                            key={data.id}
                            datos={data}
                        />
                    ))} */}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default ListadoAsignar;
