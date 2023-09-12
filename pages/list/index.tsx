import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ListItem from '@components/List/ListItem';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { dataListAtom } from '@store/store';

interface ListItemT {
  id: string;
  name: string;
  setCount: number;
  totalCount: number;
}

const List = () => {
  const [dataMenuList, setDataMenuList] = useState<ListItemT[]>([]);
  const [isDataListAtom, setDataListAtom] = useRecoilState(dataListAtom);
  const resetCount = useResetRecoilState(dataListAtom);

  const dataReset = () => {
    if (confirm('정말 초기화 하시겠습니까?')) {
      resetCount();
      location.reload();
      alert('초기화 되었습니다.');
    } else {
      alert('취소 되었습니다.');
    }
  };

  useEffect(() => {
    setDataMenuList(isDataListAtom);
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
            return (
              <ListItem key={idx} id={item.id} name={item.name} setCount={item.setCount} totalCount={item.totalCount} />
            );
          })}
        </ul>
        <BtnFixed type="button" onClick={() => dataReset()}>
          초기화
        </BtnFixed>
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
      width: 6rem;
      font-size: 1.2rem;
      strong {
        font-weight: 700;
      }
      & + p {
        margin: 0 0.5rem;
        text-align: center;
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

const BtnFixed = styled.button`
  display: block;
  width: 20rem;
  height: 5rem;
  margin: 4rem auto 2rem;
  font-size: 1.4rem;
  color: #fff;
  background-color: #9d4d68;
  border-radius: 8rem;
`;
