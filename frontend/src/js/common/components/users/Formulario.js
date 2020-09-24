import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { api } from '../../../utility/api';
import createSelect from '../Utils/renderField/createSelectMulti';
import {
    validate,
    validatorFromFunction,
    validators,
    combine,
} from 'validate-redux-form';
import {
    AsyncSelectField,
    renderFilePicker,
    SelectField,
} from '../Utils/renderField/renderField';
import { renderField, renderNumber } from '../Utils/renderField';
import { phone } from '../../../utility/validation';
const getRoles = (search) => {
    let roles = [];
    return api
        .get('roles', { search })
        .then((response) => {
            if (response) {
                response.results.forEach((Res) => {
                    roles.push({ value: Res.id, label: Res.nombre });
                });
            }
            console.log(roles);
            return roles;
        })
        .catch(() => {
            return [];
        });
};
const getCursos = (search) => {
    let cursos = [];
    return api
        .get('cursos', { search })
        .then((response) => {
            if (response) {
                response.results.forEach((Res) => {
                    cursos.push({ value: Res.id, label: Res.nombre });
                });
            }
            console.log(cursos);
            return cursos;
        })
        .catch(() => {
            return [];
        });
};
const UsuarioForm = (props) => {
    const { handleSubmit, actualizar, ver } = props;

    return (
        <div className="d-flex flex-column w-100">
            <form onSubmit={handleSubmit}>
                <br></br>
                <div
                    className="mb-2 card card-small p-2"
                    style={{
                        maxWidth: '18rem',
                    }}
                >
                    <div>
                        <h3 className="m-0 txt-35-n color-003">
                            {actualizar ? 'Actualizar' : 'Crear'} Usuario
                        </h3>
                    </div>

                    <div className="p-0 pt-3">
                        <div className="form-group has-feedback flex-1 mb-4">
                            <label className="txt-18-n color-057">Nombre</label>
                            <Field
                                component={renderField}
                                name="first_name"
                                disabled={ver}
                            />
                        </div>
                        <div className="form-group has-feedback flex-1 mb-4">
                            <label className="txt-18-n color-057">
                                Apellido
                            </label>
                            <Field
                                component={renderField}
                                name="last_name"
                                disabled={ver}
                            />
                        </div>
                        <div className="form-group has-feedback flex-1 mb-4">
                            <label className="txt-18-n color-057">email</label>
                            <Field
                                component={renderField}
                                name="email"
                                disabled={ver}
                            />
                        </div>
                        <div className="form-group has-feedback">
                            <label className="txt-18-n color-057" htmlFor="Rol">
                                Rol
                            </label>
                            <Field
                                name="idRoles"
                                placeholder="Rol"
                                component={AsyncSelectField}
                                loadOptions={getRoles}
                                // options={roles}
                                className="form-control"
                                disabled={ver}
                            />
                        </div>
                        {/* <div className="form-group has-feedback">
                            <label className="txt-18-n color-057" htmlFor="Rol">
                                Rol
                            </label>
                            <Field
                                name="idRoles"
                                placeholder="Rol"
                                component={AsyncSelectField}
                                loadOptions={getRoles}
                                // options={Roles}
                                className="form-control"
                                disabled={ver}
                            />
                        </div> */}
                        <label className="txt-18-n color-057">cursos</label>
                        <Field
                            name="Cursos"
                            placeholder="Cursos"
                            component={createSelect}
                            isMulti={true}
                            loadOptions={getCursos}
                            className="form-control"
                            disabled={ver}
                            // showForm={showForm}
                            // show_form={show_form}
                        >
                            {/* <Modal
                                    showModal={show_form}
                                    showForm={() => {
                                        showForm(false);
                                    }}
                                >
                                    <FormularioPro
                                        isNested
                                        showForm={showForm}
                                        onSubmit={props.registrarProyecto}
                                    />
                                </Modal> */}
                        </Field>
                    </div>
                    <br />
                    <br />
                    <div className=" d-flex justify-content-center">
                        <a
                            className="btn btn-danger btn-sm mr-1"
                            href="/#/usuarios"
                        >
                            Cancelar
                        </a>
                        {!ver && (
                            <button
                                type="submit"
                                className="btn btn-primary btn-sm mr-1"
                            >
                                {actualizar ? 'Actualizar' : 'Registrar'}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'UsuarioForm', // a unique identifier for this form
})(UsuarioForm);
