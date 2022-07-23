import React, { useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import styled from 'styled-components';

import { Txt } from '../../components/txt/txt';
import { colors, styles } from '../../styles';

const StyledVerticalCard = styled.div`
  max-width: 142px;
  max-height: 200px;
  padding: 16px;
  ${styles.borderRadius(10)};
  background-color: ${colors.background};
  &: hover {
    cursor: pointer;
    background-color: ${colors.hoverBackground};
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 142px;
  height: 142px;
  ${styles.borderRadius(10)}
`;

const TextWrapper = styled.div`
  ${styles.margin.top(0.75)}
`;

const PlayerControl = styled.div`
  margin: 0 auto;
  background-color: ${colors.green};
  ${styles.borderRadius(50)};
  ${styles.padding.pHorizontal(0.5)};
  ${styles.padding.pVertical(0.5)}
  ${styles.position('absolute', '5rem', '0.5rem')};
`;

const VerticalCard = () => {

  const [showBtn, setShowBtn] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <StyledVerticalCard onMouseOver={() => setShowBtn(true)} onMouseOut={() => setShowBtn(false)}>
      <Wrapper>
        <Img src='https://i.scdn.co/image/ab67706f00000002dbcc616ef4420928195b195b' alt='' />
        <TextWrapper>
          <Txt text={'Buttabomma'} type={'standard'} txtColor={'primary'} marginBottom={4} txtWidth={142} />
          <Txt text={'Amaan Malik Malik Malik Malik Malik'} type={'subText'} txtColor={'subTxt'} txtWidth={142} />
        </TextWrapper>
        {showBtn && <PlayerControl>
          {isPlay ? <BsPauseFill onClick={() => setIsPlay(false)} style={{ color: colors.secondary, width: '2rem', height: '2rem', marginLeft: '1px' }} />
            : <BsFillPlayFill onClick={() => setIsPlay(true)} style={{ color: colors.secondary, width: '2rem', height: '2rem', marginLeft: '1px' }} />}
        </PlayerControl>}
      </Wrapper>
    </StyledVerticalCard>
  );
};

export default VerticalCard;