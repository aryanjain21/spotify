import React, { memo } from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { fonts } from '../../styles';
import Ternary from '../Ternary';

const StyledText = styled.p`
  && {
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
    ${(props) => props.font()};
  }
`;
const getFontStyle = (type) => (fonts.style[type] ? fonts.style[type] : () => { });
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
