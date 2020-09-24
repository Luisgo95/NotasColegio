import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'cursos', //identificador dentro del store.
    'cursos', //endpoint donde realizará las peticiones.
    'CursoForm', //Nombre del formulario.
    '/cursos' //url del componente en el frontend.
);

export default handleActions(reducers, initialState);
