import React, { useEffect } from 'react';

import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { MdPauseCircleFilled, MdPlayCircleFilled } from 'react-icons/md';
import styled from 'styled-components';

import ProgressBar from '../../shared/progressBar/progressBar';
import { colors, media, styles } from '../../styles';

const Control = styled.div`
  width: 50%;
  ${media.lessThan('medium')`
    width: 100%;
    ${styles.margin.bottom(0.5)}
  `}
`;

const PlayerWrapper = styled.div`
  ${styles.flexConfig.rowCenter()};
  ${styles.margin.bottom(1)};
  ${media.lessThan('medium')`
    ${styles.margin.bottom(0.5)}
  `}
`;

const BarWrapper = styled.div`
  ${styles.flexConfig.rowCenter()};
  ${media.lessThan('medium')`
    width: 75%;
    margin: 0 auto;
  `}
`;

const PlayerControl = (props) => {

  const { isPlay, songUrl, updatePlayState } = props;
  let audio = new Audio(songUrl);

  useEffect(() => {
    isPlay && audio ? audio.play() : audio.pause();
  }, [isPlay]);


  return (
    <Control>
      <PlayerWrapper>
        <BiSkipPrevious style={{ color: colors.gray, width: '2rem', height: '2rem' }}
          onMouseOver={({ target }) => target.style.color = colors.primary}
          onMouseOut={({ target }) => target.style.color = colors.gray}
        />
        {!isPlay ? <MdPlayCircleFilled onClick={() => updatePlayState(true)} style={{ color: colors.primary, width: '3rem', height: '3rem', margin: '0 1.2rem' }} />
          : <MdPauseCircleFilled onClick={() => updatePlayState(false)} style={{ color: colors.primary, width: '3rem', height: '3rem', margin: '0 1.2rem' }} />}
        <BiSkipNext style={{ color: colors.gray, width: '2rem', height: '2rem' }}
          onMouseOver={({ target }) => target.style.color = colors.primary}
          onMouseOut={({ target }) => target.style.color = colors.gray}
        />
      </PlayerWrapper>
      <BarWrapper>
        <ProgressBar width={75} />
      </BarWrapper>
    </Control>
  );
};

export default PlayerControl;