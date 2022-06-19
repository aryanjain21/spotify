import React from 'react';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const user = JSON.parse(localStorage.getItem('setToken'));
    return user && user.token ? children : <Navigate to="/login" />
}

PrivateRoute.propTypes = {
    children: PropTypes.any
};

PrivateRoute.defaultProps = {
    children: null
};

export default PrivateRoute;