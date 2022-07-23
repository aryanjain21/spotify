import React, { useState } from 'react';

import { MdOutlineVolumeOff, MdOutlineVolumeUp } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { setVolumePercent } from '../../containers/bottomBar/redux/action';
import ProgressBar from '../../shared/progressBar/progressBar';
import { colors, media, styles } from '../../styles';
import { configureFlex } from '../../styles/styles';

const Volume = styled.div`
  width: 75%;
  ${styles.flexConfig.rowCenter()};
  svg {
    ${styles.margin.right(0.5)};
  }
  ${media.lessThan('medium')`
    ${configureFlex('row', 'flex-start')}
  `}
`;

const VolumeControl = (props) => {

  // const { } = props;

  const [volume, setVolume] = useState(false);
  const [volPercent, setVolPercent] = useState(100);

  // useEffect(() => {
  //   console.error('volume use effect>>>>')
  //   setVolumePercent();
  // }, [])

  const handleVolume = (flag) => {
    if (flag) {
      setVolume(flag);
      setVolPercent(0);
    } else {
      setVolume(flag);
      setVolPercent(100);
    }
  }

  return (
    <Volume>
      {!volume ? <MdOutlineVolumeUp style={{ color: colors.primary, width: '1.5rem', height: '1.5rem' }} onClick={() => handleVolume(true)} /> : <MdOutlineVolumeOff style={{ color: colors.primary, width: '1.5rem', height: '1.5rem' }} onClick={() => handleVolume(false)} />}
      <ProgressBar percent={volPercent} />
    </Volume>
  );
};

const mapStateToProps = (state) => ({
  volume: state.currentTrackDetails.currentTrack,
});

const mapDispatchToProps = (dispatch) => ({
  setVolumePercent: bindActionCreators(setVolumePercent, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VolumeControl);