import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/cursos/cursos';

import object from './CrearCurso';

const ms2p = (state) => {
    return {
        ...state.cursos,
    };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(object);
