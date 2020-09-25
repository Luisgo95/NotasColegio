import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    'usuarios', //identificador dentro del store.
    'user', //endpoint donde realizará las peticiones.
    'UsuarioForm', //Nombre del formulario.
    '/usuarios' //url del componente en el frontend.
);

export default handleActions(reducers, initialState);
