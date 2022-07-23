import React from 'react';

import styled from 'styled-components';

import { fonts, styles } from '../../styles/index';
import { configureFlex } from '../../styles/styles';
import Clickable from '../clickable/clickable';

const StyledList = styled.li`
  ${configureFlex('row', 'flex-start')};
  ${fonts.style.standard()};
  ${styles.padding.pVertical(0.25)};
  ${styles.padding.pHorizontal(1.5)};
  ${styles.margin.bottom(1.25)};
  svg {
    width: 1.5rem;
    height: 1.5rem;
    ${styles.margin.right(0.75)};
  }
  &:hover {
    ${styles.pointer()};
  }
`;

const List = (props) => {
  const { icons, name, id } = props;
  return (
    <StyledList key={id}>
      {icons}
      <Clickable text={name} txtColor={'gray'} />
    </StyledList>
  );
};

export default List;