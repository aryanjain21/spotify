import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Txt } from '../../components/txt/txt';
import { setUser } from '../login/redux/reducer';

const Home = () => {
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
  }, [param]);

  return (
    <div>
      <Txt text={'Hello'} type={'subText'} />
    </div>
  );
};

export default Home;