import { handleActions } from "redux-actions";
import { createReducer } from "../baseReducer/baseReducer";

// ------------------------------------
// Constants
// ------------------------------------

export const { reducers, initialState, actions } = createReducer(
    "roles", //identificador dentro del store.
    "roles", //endpoint donde realizará las peticiones.
    "RolForm", //Nombre del formulario.
    "/roles" //url del componente en el frontend.
);

export default handleActions(reducers, initialState);
