import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from 'react-bootstrap-table';
import Grid from '../Utils/Grid';
import { standardActions } from '../Utils/Grid/StandardActions';
import { renderField } from '../Utils/renderField/renderField';
const Notas = ({ datos }) => {
    // componentWillMount = () => {
    //     //const list = this.props.listar();
    //     // const { match, leerCursosAsignados } = this.props;
    //     // if (match.params.id) {
    //     //     const id = match.params.id;
    //     //     leerCursosAsignados(id);
    //     // }
    //     console.log('Desde funcion Notas', datos);
    //     // const valor = this.props.leerCursosAsignados(1);
    //     // console.log('desde ListdoNotas', valor);
    // };
    console.log('Desde funcion Notas', datos);
    return (
        <React.Fragment>
            <div className="d-flex flex-column w-100">
                <tbody className="table table-sm">
                    <tr key={datos.id}>
                        {/* <td>{fields.get(index).label}</td> */}
                        <td>
                            {/* <Field
                            name="principal"
                            type="radio"
                            component={renderFieldRadio}
                            label={fields.get(index).label}
                            value={fields.get(index).value.toString()}
                        /> */}
                            <h2>{datos.idCurso.nombre} </h2>
                        </td>
                        <td>
                            <input
                                name="principal"
                                type="text"
                                component={renderField}
                                // label={fields.get(index).label}
                                // value={fields.get(index).value.toString()}
                            />
                            <h2> Alumno {datos.idUsuario.first_name}</h2>
                        </td>
                    </tr>
                </tbody>
            </div>
        </React.Fragment>
    );
};

export default Notas;
