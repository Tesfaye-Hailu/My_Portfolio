import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import routes from './components/Routes';
import HeaderMenu from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        
        <HeaderMenu />
        
        <div className="content-area p-5">
          <Routes>
            {
              routes.map((route, index) => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
            }
          </Routes>
        </div>

        {/* <h2 className="name">Welcome to React JS</h2> */}
      </div>
    </Router>
  );
}

export default App;
