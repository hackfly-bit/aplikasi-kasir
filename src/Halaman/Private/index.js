import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Pengaturan from './Pengaturan';
import Produk from './Produk';
import Transaksi from './Transaksi';
import Home from './Home';
function Private() {
    return (
        <Switch>
            <Route path="/Pengaturan" component={Pengaturan} />
            <Route path="/Produk" component={Produk} />
            <Route path="/Transaksi" component={Transaksi} />
            <Route component={Home} />
        </Switch>
    );
}
export default Private;