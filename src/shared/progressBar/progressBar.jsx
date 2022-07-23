import React from 'react';

import styled from 'styled-components';

import { colors, media, styles } from '../../styles';

const Bar = styled.div`
  height: 7px;
  width: ${(props) => props.width ? props.width : 50}%;
  position: relative;
  ${media.lessThan('medium')`
    width: 75%;
    ${styles.flexConfig.rowCenter()};
  `}
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 10s ease-in-out;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Progress = styled(BaseBox)`
  background: ${colors.green};
  width: ${({ percent }) => percent}%;
`;

const ProgressBar = (props) => {
  const { percent, width } = props;
  return (
    <Bar width={width}>
      <Background />
      <Progress percent={percent} />
    </Bar>
  );
};

export default ProgressBar;