import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    validate,
    validatorFromFunction,
    validators,
    combine,
} from 'validate-redux-form';
import { renderField, renderNumber } from '../Utils/renderField';
import { phone } from '../../../utility/validation';

const NotasForm = (props) => {
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
                            {actualizar ? 'Actualizar' : 'Crear'} Curso
                        </h3>
                    </div>

                    <div className="p-0 pt-3">
                        <div className="form-group has-feedback flex-1 mb-4">
                            <label className="txt-18-n color-057">Nombre</label>
                            <Field
                                component={renderField}
                                name="nombre"
                                disabled={ver}
                            />
                        </div>
                        <div className="form-group has-feedback flex-1 mb-4">
                            <label className="txt-18-n color-057">
                                Descripcion
                            </label>
                            <Field
                                component={renderField}
                                name="descripcion"
                                disabled={ver}
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className=" d-flex justify-content-center">
                        <a
                            className="btn btn-danger btn-sm mr-1"
                            href="/#/cursos"
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
    form: 'NotasForm', // a unique identifier for this form
})(NotasForm);
