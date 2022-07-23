import React from 'react';

import { AiOutlineHome } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import styled from 'styled-components';

import List from '../../components/list/list';

const Container = styled.div`
    
`;

const StyledUl = styled.ul`

`;

const SIDE_BAR_LIST = [
    {
        id: '1',
        icon: <AiOutlineHome style={{ color: '#B3B3B3', }} />,
        txt: 'Home'
    },
    {
        id: '2',
        icon: <BsSearch style={{ color: '#B3B3B3' }} />,
        txt: 'Search'
    }
];

const SideBar = () => {
    return (
        <Container>
            Side Bar
            <StyledUl>
                {SIDE_BAR_LIST.map((element) => (
                    <React.Fragment key={element.id}>
                        <List icons={element.icon} name={element.txt} id={element.id} />
                    </React.Fragment>
                ))}
            </StyledUl>
        </Container>
    );
};

export default SideBar;