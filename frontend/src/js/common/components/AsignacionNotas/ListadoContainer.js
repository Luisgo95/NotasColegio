import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/notas/notas';
import Listado from './ListadoAsignar';

const ms2p = (state) => {
    return {
        ...state.notas,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(Listado);
