import React from 'react';

import './config/axiosConfig';

import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom';

import Home from './containers/home/home';
// import PrivateRoute from './privateRoute';
import Login from './containers/login/login';
import { store } from './configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
        <Routes>
          <Route exact path='login' element={<Login />} />
          {/* <Route exact path='/' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } /> */}
          {/* <Route exact path='*' element={<Fallback />} /> */}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
