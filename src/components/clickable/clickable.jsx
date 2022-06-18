import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Txt } from '../txt/txt';

const StyledLink = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

const Clickable = (props) => {
  const { onClick, text } = props;
  return <StyledLink onClick={onClick}>{text && <Txt text={text} />}</StyledLink>;
};

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

Txt.defaultProps = {
    onClick: () => {},
    text: ''
};

export default Clickable;
