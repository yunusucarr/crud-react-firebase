import React from 'react';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Form from './components/Form';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <BrowserRouter>
            <div>
              <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <Link to="/" className='baslik'>yunusucar</Link>
                  </div>
                  <ul className="nav navbar-nav sıralama">
                    <li>
                      <Link to="/">Ana Sayfa</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Kayıt</Link>
                    </li>
                    <li>
                      <Link to="/iletisim">Bize Ulaşın</Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <Routes>
                <Route path="/contacts" element={<Contacts />}>
                </Route>
                <Route path="/iletisim" element={<Form />}>
                </Route>
                <Route path="/" element={<Home />}>
                </Route>

              </Routes>
            </div>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </>
  );
}


export default App;
