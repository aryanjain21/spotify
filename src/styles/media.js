import { generateMedia } from "styled-media-query";

const breakPoints = {
  MOBILE: 320,
  MEDIUM: 600,
  TABLET: 768,
  DESKTOP: 992,
};

const media = generateMedia({
  mobile: `${breakPoints.MOBILE / 16}em`,
  medium: `${breakPoints.MEDIUM / 16}em`,
  tablet: `${breakPoints.TABLET / 16}em`,
  desktop: `${breakPoints.DESKTOP / 16}em`,
});

export default media;
