import React, { memo } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Ternary from '../Ternary';
import { fonts } from '../../styles';

const StyledText = styled.p`
  && {
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
    ${(props) => props.font()};
  }
`;
const getFontStyle = (type) => (fonts.style[type] ? fonts.style[type] : () => {});
export const Txt = ({ type, text, id, marginBottom, ...otherProps }) => (
  <StyledText font={getFontStyle(type)} marginBottom={marginBottom} {...otherProps}>
    <Ternary condition={id} otherwise={text} />
  </StyledText>
);

Txt.propTypes = {
  id: PropTypes.string,
  marginBottom: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fonts.style))
};

Txt.defaultProps = {
  type: 'standard'
};

const TextComponent = memo(Txt);
export default TextComponent;
