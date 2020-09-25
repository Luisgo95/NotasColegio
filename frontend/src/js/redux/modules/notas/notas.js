import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';
import { api } from 'api';
// ------------------------------------
// Constants
// ------------------------------------
const SET_ALUMNOS_CURSO = 'SET_ALUMNOS_CURSO';

export const baseReducer = createReducer(
    'notas', //identificador dentro del store.
    'notas', //endpoint donde realizará las peticiones.
    'NotasForm', //Nombre del formulario.
    'notas' //url del componente en el frontend.
);

const setLoader = (loader) => ({
    type: 'TICKET_LOADER',
    loader,
});

// exposssrt default handleActions(reducers, initialState);

const leerCursosAsignados = (id) => (dispatch) => {
    const params = { id };
    let endpoint = 'cursosAsignados/listarAlumnosCurso/';
    dispatch(setLoader(true));
    api.get(`${endpoint}`, params)
        .then((response) => {
            let ListadoAlumnosAsignados = [];
            ListadoAlumnosAsignados = response;
            // dispatch(setItem(response));
            console.log('desde aqui en notas', ListadoAlumnosAsignados);
            dispatch({ type: SET_ALUMNOS_CURSO, ListadoAlumnosAsignados });
            // if (!!formName) dispatch(initializeForm(formName, response));
        })
        .catch(() => {})
        .finally(() => {
            dispatch(setLoader(false));
        });
};

export const reducers = {
    ...baseReducer.reducers,
    // [SET_DATA]: (state, { data }) => {
    //     return {
    //         ...state,
    //         data,
    //     };
    // },

    [SET_ALUMNOS_CURSO]: (state, { ListadoAlumnosAsignados }) => {
        return {
            ...state,
            ListadoAlumnosAsignados,
        };
    },
};

export const actions = {
    // ActualizarPropiedad,
    leerCursosAsignados,
    ...baseReducer.actions,
};
export const initialState = {
    ListadoAlumnosAsignados: [],
    ...baseReducer.initialState,
};

export default handleActions(reducers, initialState);
