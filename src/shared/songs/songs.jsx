import React from 'react';

import styled from 'styled-components';

import SongBar from '../../components/songBar/songBar';

const StyledSongs = styled.div`
`;

const BarWrapper = styled.div`
`;

const Songs = () => {
  return (
    <StyledSongs>
      <BarWrapper>
        <SongBar />
      </BarWrapper>
    </StyledSongs>
  );
};

export default Songs;