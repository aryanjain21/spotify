import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/reducer';

const Login = () => {
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    console.error(param, window.location.hash.substring(1).split('&'));
  }, [param]);

  const userData = useSelector((state) => state.user.user);

  const handleLogin = () => {
    const clientId = 'a744e2a8492d4f5bbe29860cc730ea07';
    const redirectUrl = 'http://localhost:3000';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read'
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ' '
    )}&response_type=token&show_daialog=true`;
  };

  return (
    <div>
      Login: {userData && userData.length > 0 && userData[0].name}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
