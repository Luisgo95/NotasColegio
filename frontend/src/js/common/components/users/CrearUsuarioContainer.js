import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/usuarios/usuarios2';

import object from './CrearUsuario';

const ms2p = (state) => {
    return {
        ...state.usuarios,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(object);
