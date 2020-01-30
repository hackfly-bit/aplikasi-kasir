import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Koomponen Halaman registrasi
import Registrasi from './Halaman/Registrasi';
import Login from './Halaman/Login';
import LupaPassword from './Halaman/lupa-password';
import NotFound from './Halaman/404';
import Private from './Halaman/Private';
import PrivateRoute from './Componen/PrivateRoute';
import FirebaseProvider from './Componen/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Private} />
          <PrivateRoute path="/Transaksi" component={Private} />
          <PrivateRoute path="/Pengaturan" component={Private} />
          <PrivateRoute path="/Produk" component={Private} />
          <Route path="/Registrasi" component={Registrasi} />
          <Route path="/Login" component={Login} />
          <Route path="/Lupa-password" component={LupaPassword} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
