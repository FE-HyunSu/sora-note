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
    <React.Fragment>
      <ListUI>
        <ul>
          <ListTitle>
            <div>
              <em>품목</em>
              <p>
                <strong>재고수량</strong>
              </p>
              <p>
                <strong>단위</strong>
              </p>
              <strong>수량결과</strong>
            </div>
          </ListTitle>
          {dataMenuList.map((item: ListItemT, idx: number) => {
            return <ListItem key={idx} id={item.id} name={item.name} setCount={item.setCount} />;
          })}
        </ul>
      </ListUI>
    </React.Fragment>
  );
};

export default List;

const ListUI = styled.div`
  ul {
  }
`;

const ListTitle = styled.li`
  display: block;
  position: sticky;
  top: 5rem;
  height: 4rem;
  & > div {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border-top: 0.1rem solid #eee;
    border-bottom: 0.1rem solid #eee;
    em {
      display: block;
      width: 8rem;
      font-weight: 700;
      font-size: 1.2rem;
    }
    p {
      width: 5rem;
      font-size: 1.2rem;
      strong {
        font-weight: 700;
      }
      & + p {
        margin: 0 0.5rem;
      }
    }
    strong {
      font-weight: 700;
      font-size: 1.2rem;
      span {
        font-weight: 400;
        font-size: 1.1rem;
        color: #999;
      }
    }
  }
`;
