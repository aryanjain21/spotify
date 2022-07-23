import React, { memo } from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { colors, fonts, styles } from '../../styles';
import Ternary from '../Ternary';

const StyledText = styled.p`
  && {
    ${(props) => props.font()};
    ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
    color: ${(props) => props.color};
    ${(props) => props.txtWidth ? `${styles.textEllipsis(props.txtWidth)}px` : null};
  }
`;
const getFontStyle = (type) => (fonts.style[type] ? fonts.style[type] : () => { });
const getFontColor = (color) => (colors[color] ? colors[color] : colors.text);
export const Txt = ({ type, text, txtColor, id, marginBottom, ...otherProps }) => (
  <StyledText font={getFontStyle(type)} color={getFontColor(txtColor)} marginBottom={marginBottom} {...otherProps}>
    <Ternary condition={id} otherwise={text} />
  </StyledText >
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
