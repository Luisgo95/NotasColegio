import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableHeaderColumn } from 'react-bootstrap-table';
import Grid from '../Utils/Grid';
import { standardActions } from '../Utils/Grid/StandardActions';

class Rol extends Component {
    componentWillMount = () => {
        this.props.listar();
    };

    render() {
        console.log('ESTADO: ', this.props);
        const {
            data,
            loader,
            searchChange,
            onPageChange,
            onSortChange,
            eliminar,
            listar,
            page,
        } = this.props;

        return (
            <div className="mb-4 card card-small p-4">
                <div className="d-flex flex-wrap mb-2  mt-2">
                    <h3 className="txt-35-n color-003 w-50">Cursos</h3>

                    <div className="d-flex flex-row justify-content-between align-items-center flex-fill ">
                        <a
                            className="btn btn-primary btn-sm mr-1"
                            href="/#/cursos/create"
                        >
                            Agregar Curso
                        </a>
                        <div className="flex-fill d-flex align-items-center ml-3">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => searchChange(e.target.value)}
                                placeholder="Buscar..."
                                style={{
                                    border: '2px solid #E5E5E5',
                                    borderRadius: '12px',
                                    paddingRight: '35px',
                                }}
                            />
                            {/* <FontAwesomeIcon
                                icon={faSearch}
                                className="icono color-4AC"
                                style={{
                                    marginLeft: -35,
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
                <Grid
                    data={data}
                    loading={loader}
                    onPageChange={listar}
                    page={page}
                    onSortChange={onSortChange}
                >
                    <TableHeaderColumn isKey dataField="nombre" dataSort>
                        Nombre
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="descripcion" dataSort>
                        Descripcion
                    </TableHeaderColumn>
                    {/* <TableHeaderColumn dataField="direccion" dataSort>
                        Dirección
                    </TableHeaderColumn> */}
                    <TableHeaderColumn
                        dataField="id"
                        dataAlign="center"
                        dataSort
                        dataFormat={standardActions({
                            editar: 'cursos',
                            // ver: "roles",
                            notas: 'notas',
                            eliminar,
                        })}
                    >
                        Asigna Notas aqui
                    </TableHeaderColumn>
                </Grid>
            </div>
        );
    }
}

export default Rol;
