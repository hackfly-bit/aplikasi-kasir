import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pengguna from './Pengguna';
import Tokoh from './Tokoh';
function Pengaturan() {

    return (
        <Switch>
            <Route path="/Pengaturan/Pengguna" component={Pengguna} />
            <Route path="/Pengaturan/Tokoh" component={Tokoh} />
            <Redirect to="/Pengaturan/Pengguna" />
        </Switch>
    );
}
export default Pengaturan;