import React from'react';
import { Txt } from '../../components/txt/txt';
import Login from '../login/login';

const Home = () => {
    return(
        <div>
            <Txt text={'Hello'} type={'subText'} />
            <Login />
        </div>
    );
};

export default Home;