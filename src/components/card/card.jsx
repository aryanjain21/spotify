import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Txt } from '../txt/txt';

const StyledCardLink = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

const CustomCard = styled.div`
  && {
    margin: 20px 0;
    max-width: ${(props) => props.maxwidth};
    color: ${(props) => props.color};
    ${(props) => props.color && `color: ${props.color}`};
  }
`;

const ImageSection = styled.div`
  && {
    margin: 20px 0;
    max-width: ${(props) => props.maxwidth};
    color: ${(props) => props.color};
    ${(props) => props.color && `color: ${props.color}`};
  }
`;

const Card = (props) => {
    const { onClick, item } = props;
    return (<StyledCardLink onClick={onClick}>
        <CustomCard>
            <ImageSection>
                <img src={item.imageUrl} alt="" />
            </ImageSection>
            <Txt text={item.name}></Txt>
        </CustomCard>
    </StyledCardLink>);
};

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

Card.defaultProps = {
    onClick: () => { },
    item: {}
};

export default Card;
