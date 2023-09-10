import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DataList from '@static/data/menuInfo.json';
import ListItem from '@components/List/ListItem';

interface ListItemT {
  id: string;
  name: string;
  setCount: number;
}

const List = () => {
  const [dataMenuList, setDataMenuList] = useState<ListItemT[]>([]);

  useEffect(() => {
    setDataMenuList(DataList.menuList);
  }, []);
  return (
    <ListUI>
      <ul>
        {dataMenuList.map((item: ListItemT, idx: number) => {
          return <ListItem key={idx} id={item.id} name={item.name} setCount={item.setCount} />;
        })}
      </ul>
    </ListUI>
  );
};

export default List;

const ListUI = styled.div`
  ul {
  }
`;
