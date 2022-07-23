import React, { useEffect } from 'react';

import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux'

import { setUser } from './redux/reducer';
import * as loginActions from './redux/reducer';

const Login = ({ loginAction }) => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.error('login use effect>>>>')
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      // dispatch(setUser(token))
      localStorage.setItem('setToken', token)
      dispatch(setUser(token));
      setTimeout(() => {
        navigate('home');
      }, 1000);
    }
  }, [param])

  // const handleLogin = () => {
  //   dispatch(getUser());
  // };

  return (
    <div>
      <button onClick={() => {
        console.error('onclick>>>')
        loginAction.getUser();
      }}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: bindActionCreators(loginActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
