import Proptypes from 'prop-types';

const Ternary = ({ condition, children, otherwise }) => (condition ? children : otherwise);

Ternary.propsTypes = {
    condition: Proptypes.bool,
    otherwise: Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node]),
    children: Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node])
};

Ternary.defaultProps = {
    otherwise: null
};

export default Ternary;
