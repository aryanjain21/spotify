import { css } from "styled-components";

import media from "./media";

// font-sizes
export const dynamicFontSize = (font, desktopDelta = 0, tabletDelta = 0) => css`
  ${font()}
  ${media.greaterThan("tablet")`font-size: ${
    tabletDelta +
    parseInt(font()[0].replace("font-size:", "").replace("rem;", "").replace(/\s+/g, ""))
  }rem;`}
${media.greaterThan("desktop")`font-size: ${
    desktopDelta +
    parseInt(font()[0].replace("font-size:", "").replace("rem;", "").replace(/\s+/g, ""))
  }rem;`}
`;

const regular = () => css`
  font-size: 1rem;
`;
const xRegular = () => css`
  font-size: 1.125rem;
`;
const small = () => css`
  font-size: 0.875rem;
`;
const big = () => css`
  font-size: 1.1rem;
`;
const large = () => css`
  font-size: 1.5rem;
`;
const extraLarge = () => css`
  font-size: 2rem;
`;

// font-weights
const light = () => css`
  font-weight: 400;
`;
const bold = () => css`
  font-weight: 700;
`;

const normal = () => css`
  font-weight: 500;
`;

// font-styles
const heading = () => css`
  ${large()}
  ${bold()}
`;

const subheading = () => css`
  ${big()}
  ${bold()}
`;

const standard = () => css`
  ${regular()}
  ${normal()}
`;

const subText = () => css`
  ${small()}
  ${normal()}
`;

export default {
  dynamicFontSize,
  size: {
    regular,
    small,
    big,
    large,
    extraLarge,
    xRegular,
  },
  style: {
    heading,
    subheading,
    standard,
    subText,
  },
  weights: {
    light,
    bold,
    normal,
  },
};
