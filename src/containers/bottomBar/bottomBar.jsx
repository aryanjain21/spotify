import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { get, isEmpty } from 'lodash';

import PlayerControl from '../../components/playerControl/playerControl';
import VolumeControl from '../../components/volumeControl/volumeControl';
import HorizontalCard from '../../shared/horizontalCard/horizontalCard';
import { media, styles } from '../../styles';
import { configureFlex } from '../../styles/styles';

import { getCurrentPlay, updatePlayState } from './redux/action';

const Container = styled.div`
  height: 100%;
  ${styles.flexConfig.rowCenter()};
  ${styles.padding.pHorizontal(2)};
  ${media.lessThan('medium')`
    ${styles.padding.pHorizontal(1)};
    ${styles.padding.pVertical(0)};
    ${configureFlex('row', 'flex-start')}
  `}
`;

const ControlArea = styled.div`
  width: 100%;
  ${styles.flexConfig.rowCenter()};
  ${media.lessThan('medium')`
    ${configureFlex('column', 'flex-start')}
  `}
`;

const BottomBar = (props) => {

  const { track, isPlay, getCurrentPlay, updatePlayState } = props;
  const [trackDetails, setTrackDetails] = useState({});

  useEffect(() => {
    getCurrentPlay();
    setTimeout(() => {
      if (!isEmpty(track)) {
        let mappedData = {
          artistName: get(track.item, 'artists[0].name', ''),
          songName: get(track.item, 'name', ''),
          image: get(track.item.album, 'images[2]', ''),
          duration: get(track.item, 'duration_ms', 0),
          id: get(track.item, 'id', ''),
          song: get(track.item, 'preview_url', ''),
          progress: get(track, 'progress_ms', '')
        }
        setTrackDetails(mappedData);
      }
    }, 1000);
  }, []);

  // useState(() => {
  //   console.error('track>>>>', track)
  //   if (!isEmpty(track)) {
  //     let mappedData = {
  //       artistName: get(track.item, 'artists[0].name', ''),
  //       songName: get(track.item, 'name', ''),
  //       image: get(track.item.album, 'images[2]', ''),
  //       duration: get(track.item, 'duration_ms', 0),
  //       id: get(track.item, 'id', ''),
  //       song: get(track.item, 'preview_url', ''),
  //       progress: get(track, 'progress_ms', '')
  //     }
  //     setTrackDetails(mappedData);
  //   }
  // }, [track.item]);

  return (
    <Container>
      <HorizontalCard image={trackDetails?.image?.url}
        title={trackDetails.songName}
        artist={trackDetails.artistName}
      />
      <ControlArea>
        <PlayerControl isPlay={isPlay} songUrl={trackDetails.song} updatePlayState={updatePlayState} />
        <VolumeControl />
      </ControlArea>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  track: state.currentTrackDetails.currentTrack,
  isPlay: state.currentTrackDetails.isPlay
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentPlay: bindActionCreators(getCurrentPlay, dispatch),
  updatePlayState: bindActionCreators(updatePlayState, dispatch),
  // updatePlayState: (isPlay) => dispatch(updatePlayState(isPlay))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar);