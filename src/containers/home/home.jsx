import React, { useEffect } from 'react';

import styled from 'styled-components';

import SongBar from '../../components/songBar/songBar';
// import VerticalCard from '../../shared/verticalCard/verticalCard';
import { colors, media, styles } from '../../styles/index';
import BottomBar from '../bottomBar/bottomBar';
import SideBar from '../sideBar/sideBar';

const Home = () => {

  const Container = styled.div`
  `;

  const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    ${styles.flexConfig.row()};
  `;

  const LeftSection = styled.div`
    display: none;
    ${media.greaterThan('medium')`
      width: 100%;
      max-width: 20%;
      display: block;
      background-color: ${colors.background};
    `}
  `;

  const RigthSection = styled.div`
    width: 100%;
    max-width: 100%%;
    overflow-Y: auto;
    ${media.greaterThan('medium')`
      max-width: 80%;
    `}
  `;

  // For card display use below property
  // ${styles.flexConfig.row()};
  //   gap: 1.75rem;
  //   flex-wrap: wrap;
  const ContentWrapper = styled.div`
    height: 100%;
    overflow-Y: auto;
    ${styles.padding.pTop(2)};
    ${styles.padding.pHorizontal(1)};
    background-color: rgb(83, 83, 83);
  `;

  const Footer = styled.footer`
    width: 100%;
    height: 15vh;
    ${styles.position('fixed', '', '', '0', '')}
    background-color: ${colors.background};
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  `;

  useEffect(() => {
    // axios.get('https://api.spotify.com/v1/browse/categories', {
    //   headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem('setToken'),
    //     'Content-Type': 'application/json'
    //   }
    // }).then((resp) => {
    //   console.error('home>>>>>', resp);
    // }).catch((error) => {
    //   console.error('error>>>>', error);
    // });

    // axios.get('https://api.spotify.com/v1/browse/categories/hiphop', {
    //   headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem('setToken'),
    //     'Content-Type': 'application/json'
    //   }
    // }).then((resp) => {
    //   console.error('home>>>>>', resp);
    // }).catch((error) => {
    //   console.error('error>>>>', error);
    // })
  }, [])

  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <SideBar />
        </LeftSection>
        <RigthSection>
          <ContentWrapper>
            <SongBar />
          </ContentWrapper>
        </RigthSection>
      </Wrapper>
      <Footer>
        <BottomBar />
      </Footer>
    </Container>
  );
};

export default Home;