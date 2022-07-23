import React, { useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import styled from 'styled-components';

import { Txt } from '../../components/txt/txt';
import HorizontalCard from '../../shared/horizontalCard/horizontalCard';
import { colors, styles } from '../../styles';
import { configureFlex } from '../../styles/styles';

// const breatheAnimation = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 100px; width: 100px; opacity: 0.6; }
// `

const StyledSongBar = styled.div`
  ${styles.padding.pHorizontal(1)};
  ${styles.padding.pVertical(0.5)};
  ${configureFlex('row', 'space-between')};
  &:hover {
    ${styles.borderRadius(10)}
  }
`;

const MultiOption = styled.div`
  min-width: 24px;
`;

const Equaliser = styled.img`
`;

const PlayerOption = styled.div`
`;

const TitleInfo = styled.div`
`;

const SongBar = () => {

  const [isHover, setIsHover] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  return (
    <StyledSongBar
      onMouseOver={({ target }) => {
        setIsHover(true);
        target.style.backgroundColor = 'rgba(128, 128, 128, 0.2)'
      }}
      onMouseOut={({ target }) => {
        setIsHover(false);
        target.style.backgroundColor = ''
      }}>
      <MultiOption>
        {!isHover ?
          !isPlay ?
            <Txt text={'1'} type={'standard'} txtColor={'gray'} />
            :
            <Equaliser src={'https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif'} />

          :
          <PlayerOption>
            {isPlay ? <BsPauseFill onClick={() => setIsPlay(false)} style={{ color: colors.primary, width: '1.5rem', height: '1.5rem' }} />
              : <BsFillPlayFill onClick={() => setIsPlay(true)} style={{ color: colors.primary, width: '1.5rem', height: '1.5rem' }} />}
          </PlayerOption>
        }
      </MultiOption>
      <TitleInfo>
        <HorizontalCard isPlay={isPlay} image={''} title={'Buttabomma'} artist={'Amaan Malik'} />
      </TitleInfo>
      <Txt text={'Ala Vaikunthapurramuloo'} type={'standard'} txtColor={'gray'} />
      <Txt text={'4 days ago'} type={'standard'} txtColor={'gray'} />
      <Txt text={'4:05'} type={'standard'} txtColor={'gray'} />
    </StyledSongBar>
  );
};

export default SongBar;