import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
// import Selects from "./Selects";
// import PropTypes from 'prop-types';
// import { TableHeaderColumn } from 'react-bootstrap-table';
import Grid from '../Utils/Grid';
// import { standardActions } from '../Utils/Grid/StandardActionsTicket';
// import Cards from "./Cards";
import { renderField, NumberFormat } from '../Utils/renderField/renderField';
import LoadMask from '../Utils/LoadMask/LoadMask';
import Listar from './ListadoNotas';
const verPuntos = (data) => {
    console.log('Hola desde puntos', data);
};

class ListadoAsignar extends Component {
    componentWillMount = () => {
        const { match, leerCursosAsignados } = this.props;
        if (match.params.id) {
            const id = match.params.id;
            const datos = leerCursosAsignados(id);
        }
    };
    actualizarFormulario = (data) => {
        const { editar } = this.props;
        console.log('Hola desde CrearTocket');
        editar(data.id, data);
    };

    render() {
        const {
            data,
            match,
            loader,
            // onPageChange,
            // onSortChange,
            // searchChange,
            // filtrar,
            // resetearBuscador,
            // SetResetearBuscador,
            // listar,
            // leer,
            crear,
            creacion,
            handleSubmit,
            ListadoAlumnosAsignados,
            me,
        } = this.props;
        const funcionEnvio = match.params.id ? creacion : crear;

        // let curso = ListadoAlumnosAsignados[0];
        // console.log('Pruebando ', curso.idCurso.nombre);
        return (
            <React.Fragment>
                {/* <form onSubmit={() => crearFusion(datos)}> */}
                <form onSubmit={funcionEnvio}>
                    {/* <h1>{curso.idCurso.nombre}</h1> */}
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
                                        <FieldArray
                                            name="punteos"
                                            // name={data.id.toString()}
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
                    <div className="d-flex justify-content-center">
                        <button
                            type={'submit'}
                            // onClick={crearFusion}
                            className="btn btn-primary btn-sm mr-1"
                        >
                            Guardar Puntos
                        </button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
export default reduxForm({
    form: 'ListadoAsignar', // a unique identifier for this form
})(ListadoAsignar);

// export default ListadoAsignar;
