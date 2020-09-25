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
const creacion = (data) => (dispatch, getStore) => {
    console.log('hola desde el redux notas ', data);
    const estado = getStore();
    const formData = estado.form.ListadoAsignar;

    console.log('hola desde el redux notas2 ', formData);
    // formData.map(array);
    // formData.map((data) => console.log('mapeando', data));
    // for (let i = 0; i < 1; i++) {
    //     console.log('desde for', formData[i]);
    // }
    // puntos = formData;
    // const formData2 = formData.registeredFields.punteos.valueOf();

    // const punt = formData.punteos;
    // console.log('hola desde el redux notas3 ', formData2.valueOf());
    // for(formData){
    //     console.log("desdeRecorrido", formData[1])
    // }
    // puntos.map((data) => console.log('ciclo ', data));
    // dispatch(setLoader(true));
    api.post('notas', formData)
        .then(() => {
            NotificationManager.success('Registro creado', 'Éxito', 3000);
            if (!!resourceList) dispatch(push(resourceList));
        })
        .catch(() => {
            NotificationManager.error('Error en la creación', 'ERROR');
        })
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
    creacion,
    leerCursosAsignados,
    ...baseReducer.actions,
};
export const initialState = {
    ListadoAlumnosAsignados: [],

    ...baseReducer.initialState,
};

export default handleActions(reducers, initialState);
