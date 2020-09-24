import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import { Login, Profile, Registro } from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from './common/components/Examples/Grids';
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
require('../style/index.css');
import Rol from './common/components/Roles/ListadoContainer';
import CrearRol from './common/components/Roles/CrearRolContainer';

import Cursos from './common/components/Cursos/ListadoContainer';
import CrearCursos from './common/components/Cursos/CrearCursoContainer';

import Usuarios from './common/components/users/ListadoContainer';
import CrearUsuarios from './common/components/users/CrearUsuarioContainer';

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute
                    exact
                    path="/user-profile"
                    component={Profile}
                />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute
                    exact
                    path="/notifications"
                    component={Notificaciones}
                />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />

                <ProtectedRoute exact path="/roles" component={Rol} />
                <ProtectedRoute
                    exact
                    path="/roles/:id/ver"
                    component={CrearRol}
                />
                <ProtectedRoute
                    exact
                    path="/roles/:id/editar"
                    component={CrearRol}
                />
                <ProtectedRoute
                    exact
                    path="/roles/create"
                    component={CrearRol}
                />
                {/* //************Cursos**************** * */}
                <ProtectedRoute exact path="/cursos" component={Cursos} />
                <ProtectedRoute
                    exact
                    path="/cursos/:id/ver"
                    component={CrearCursos}
                />
                <ProtectedRoute
                    exact
                    path="/cursos/:id/editar"
                    component={CrearCursos}
                />
                <ProtectedRoute
                    exact
                    path="/cursos/create"
                    component={CrearCursos}
                />
                {/* ********************CrearUsuarios************* */}
                <ProtectedRoute exact path="/usuarios" component={Usuarios} />
                <ProtectedRoute
                    exact
                    path="/usuarios/:id/ver"
                    component={CrearUsuarios}
                />
                <ProtectedRoute
                    exact
                    path="/usuarios/:id/editar"
                    component={CrearUsuarios}
                />
                <ProtectedRoute
                    exact
                    path="/usuarios/create"
                    component={CrearUsuarios}
                />

                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
