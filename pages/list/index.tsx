import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import ListItem from '@components/List/ListItem';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import { dataListAtom, pageModeAtom } from '@store/store';
import ProductItem from '@components/List/ProductItem';

interface ListItemT {
  id: string;
  name: string;
  setCount: number;
  totalCount: number;
  productSetCount: number;
  productTotalCount: number;
}

const List = () => {
  const [dataMenuList, setDataMenuList] = useState<ListItemT[]>([]);
  const [isDataListAtom, setDataListAtom] = useRecoilState(dataListAtom);
  const isPageModeAtom = useRecoilValue<boolean>(pageModeAtom);
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
  }, [isDataListAtom, isPageModeAtom]);

  return (
    <React.Fragment>
      <ListUI>
        <ul>
          <ListTitle>
            <div>
              {isPageModeAtom ? (
                <React.Fragment>
                  <p className="title-name">품목</p>
                  <p className="title-total">재고</p>
                  <p className="title-count">단위</p>
                  <p className="title-result">결과</p>
                  <p className="title-save">저장</p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="title-name">품목</p>
                  <p className="title-count">단위</p>
                  <p className="title-total">생산</p>
                  <p className="title-result">결과</p>
                  <p className="title-save">저장</p>
                </React.Fragment>
              )}
            </div>
            {/* <div>
              <em>품목</em>
              {isPageModeAtom ? (
                <React.Fragment>
                  <p>
                    <strong>재고</strong>
                  </p>
                  <p className="target">
                    <strong>단위</strong>
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="target">
                    <strong>단위</strong>
                  </p>
                  <p>
                    <strong>생산</strong>
                  </p>
                </React.Fragment>
              )}
              <strong>결과</strong>
              <span>저장</span>
            </div> */}
          </ListTitle>
          {isPageModeAtom ? (
            <React.Fragment>
              {dataMenuList.map((item: ListItemT, idx: number) => {
                return (
                  <ListItem
                    key={idx}
                    id={item.id}
                    name={item.name}
                    setCount={item.setCount}
                    totalCount={item.totalCount}
                  />
                );
              })}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {dataMenuList.map((item: ListItemT, idx: number) => {
                return (
                  <ProductItem
                    key={idx}
                    id={item.id}
                    name={item.name}
                    productSetCount={item.productSetCount}
                    productTotalCount={item.productTotalCount}
                  />
                );
              })}
            </React.Fragment>
          )}
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
  width: 100%;
  max-width: 42rem;
  margin: auto;
  ul {
  }
`;

const ListTitle = styled.li`
  display: block;
  position: sticky;
  top: 5rem;
  & > div {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    p {
      font-weight: 700;
      font-size: 1.2rem;
      text-align: center;
      & + p {
        margin-left: 1rem;
      }
    }
    .title-name {
      flex-shrink: 0;
      width: 8rem;
    }
    .title-total {
      flex: auto;
    }
    .title-count {
      flex-shrink: 0;
      width: 4rem;
    }
    .title-result {
      flex-shrink: 0;
      width: 4.5rem;
    }
    .title-save {
      flex-shrink: 0;
      width: 5rem;
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
