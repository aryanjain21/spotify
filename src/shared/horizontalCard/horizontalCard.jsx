import React from 'react';

import styled from 'styled-components';

import { Txt } from '../../components/txt/txt';
import { media, styles } from '../../styles';
import { configureFlex } from '../../styles/styles';

const StyledHorizontalCard = styled.div`
  max-width: 30%;
  ${configureFlex('row', 'flex-start')};
  ${media.lessThan('medium')`
    ${configureFlex('columen', 'flex-start', 'flex-start')};
  `}
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  ${media.lessThan('medium')`
    width: 40px;
    height: 40px;
    ${styles.margin.bottom(0.5)}
  `}
`

const Wrapper = styled.div`
  ${styles.margin.left(1.25)};
  ${media.lessThan('medium')`
  ${styles.margin.left(0)};
  `}
`;

const HorizontalCard = (props) => {

  const { image, title, artist, isPlay } = props;

  return (
    <StyledHorizontalCard>
      <Img src={image} alt='' />
      <Wrapper>
        <Txt text={title} type={'subheading'} txtColor={isPlay ? 'green' : 'primary'} marginBottom={4} />
        <Txt text={artist} type={'subText'} txtColor={'gray'} />
      </Wrapper>
    </StyledHorizontalCard>
  );
};

export default HorizontalCard;