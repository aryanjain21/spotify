import { css } from "styled-components";

import { colors } from "./colors";

export const configureFlex = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  flexBasis = 0,
  flexGrow = 1,
  flexShrink = 0,
) => css`
  ${direction === "row" ? row() : column()}
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
  flex-basis: ${flexBasis};
  flex-grow: ${flexGrow};
  flex-shrink: ${flexShrink};
`;

const row = () => css`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const column = () => css`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const rowCenter = () => css`
  ${configureFlex("row", "center", "center", "center")};
`;

const unequalColumns = () => css`
  ${configureFlex("column", "", "", "", 0, 0, 0)};
`;

const height = (height = 4) => css`
  height: ${height}rem;
`;

const top = (marginTop = 0) =>
  css`
    margin-top: ${marginTop}rem;
  `;

const bottom = (marginBottom = 0) =>
  css`
    margin-bottom: ${marginBottom}rem;
  `;

const left = (marginLeft = 0) =>
  css`
    margin-left: ${marginLeft}rem;
  `;

const right = (marginRight = 0) =>
  css`
    margin-right: ${marginRight}rem;
  `;

const vertical = (verticalMargin = 0) => css`
  margin-top: ${verticalMargin}rem;
  margin-bottom: ${verticalMargin}rem;
`;

const horizontal = (horizontalMargin = 0) => css`
  margin-left: ${horizontalMargin}rem;
  margin-right: ${horizontalMargin}rem;
`;

const pTop = (paddingTop = 0) =>
  css`
    padding-top: ${paddingTop}rem;
  `;

const pBottom = (paddingBottom = 0) =>
  css`
    padding-bottom: ${paddingBottom}rem;
  `;

const pLeft = (paddingLeft = 0) =>
  css`
    padding-left: ${paddingLeft}rem;
  `;

const pRight = (paddingRight = 0) =>
  css`
    padding-right: ${paddingRight}rem;
  `;

const pVertical = (verticalPadding = 0) => css`
  padding-top: ${verticalPadding}rem;
  padding-bottom: ${verticalPadding}rem;
`;

const pHorizontal = (horizontalPadding = 0) => css`
  padding-left: ${horizontalPadding}rem;
  padding-right: ${horizontalPadding}rem;
`;

const borderRadiusBottom = (bottomRadius = 0) => css`
  border-bottom-left-radius: ${bottomRadius}px;
  border-bottom-right-radius: ${bottomRadius}px;
`;

const borderRadiusTop = (topRadius = 0) => css`
  border-top-left-radius: ${topRadius}px;
  border-top-right-radius: ${topRadius}px;
`;

const borderRadius = (radius) =>
  css`
    border-radius: ${radius + `${typeof radius === `string` ? `;` : `px`}`};
  `;

const borderWithRadius = (width = 1, type = "solid", color = "#ccc", radius = 0) =>
  css`
    border: ${width}px ${type} ${color};
    ${borderRadius(radius)}
  `;

const boxShadow = (hOffset = 0, vOffset = 0, blur = 0, spread = 0, color = "#ccc") =>
  css`
    box-shadow: ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color};
  `;

const primaryBackgroundColor = () =>
  css`
    background-color: ${colors.accent};
  `;

const zIndex = (z = 1) => css`
  z-index: ${z};
`;

const pointer = (cursor = "pointer") => css`
  cursor: ${cursor};
  -webkit-tap-highlight-color: transparent;
`;

const position = (
  position = "relative",
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
) => css`
  position: ${position};
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;

const textEllipsis = (width = "200px") => css`
  white-space: nowrap;
  overflow: hidden;
  width: ${width};
  text-overflow: ellipsis;
`;
export default {
  height,
  zIndex,
  pointer,
  position,
  textEllipsis,
  margin: {
    top,
    bottom,
    right,
    left,
    vertical,
    horizontal,
  },
  padding: {
    pTop,
    pBottom,
    pLeft,
    pRight,
    pVertical,
    pHorizontal,
  },
  borderWithRadius,
  borderRadius,
  borderRadiusBottom,
  borderRadiusTop,
  primaryBackgroundColor,
  flexConfig: {
    row,
    column,
    rowCenter,
    unequalColumns,
  },
  boxShadow,
};
