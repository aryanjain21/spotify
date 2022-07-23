import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, styles } from '../../styles/index';
// import { Txt } from '../txt/txt';

const StyledLink = styled.div`
  color: ${(props) => props.color};
  &:hover {
    ${styles.pointer()};
    color: ${colors.primary};
  }
`;

const getFontColor = (color) => (colors[color] ? colors[color] : colors.text);
const Clickable = (props) => {
  const { onClick, text, txtColor } = props;
  return <StyledLink onClick={onClick} color={getFontColor(txtColor)}>{text}</StyledLink>;
};

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

Clickable.defaultProps = {
  onClick: () => { },
  text: ''
};

export default Clickable;
