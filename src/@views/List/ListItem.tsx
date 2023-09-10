import React from 'react';
import styled from '@emotion/styled';

interface ListItemT {
  id: string;
  name: string;
}

const ListItem = ({ name, id }: ListItemT) => {
  return <ListItemUI>{name}</ListItemUI>;
};

export default ListItem;

const ListItemUI = styled.li`
  padding: 1.5rem;
  border-bottom: 0.1rem solid #eee;
`;
