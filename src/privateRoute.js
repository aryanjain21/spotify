import React from "react";

import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const token = localStorage.getItem("setToken");
    return token ? children : <Navigate to='/login' />;
}

PrivateRoute.propTypes = {
    children: PropTypes.any,
};

PrivateRoute.defaultProps = {
    children: null,
};

export default PrivateRoute;
