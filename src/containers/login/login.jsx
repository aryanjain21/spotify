import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUser, setUser } from './redux/reducer';

const Login = () => {
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      // dispatch(setUser(token))
      localStorage.setItem('setToken', token)
      dispatch(setUser(token));
    }
  }, [param])

  const handleLogin = () => {
    dispatch(getUser());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
