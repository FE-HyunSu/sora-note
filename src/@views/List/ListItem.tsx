import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { dataListAtom } from '@store/store';

interface ListItemT {
  id: string;
  name: string;
  setCount: number;
  totalCount: number;
}

const ListItem = ({ name, id, setCount, totalCount }: ListItemT) => {
  const [isDataListAtom, setDataListAtom] = useRecoilState(dataListAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  const setCountRef = useRef<HTMLInputElement>(null);
  const [isSet, setSet] = useState<number>(0);
  const [isCountNum, setCountNum] = useState<number>(0);
  const [value1, setValue1] = useState<number>(totalCount);
  const [value2, setValue2] = useState<number>(setCount);

  const dataSave = () => {
    let cloneData = [...isDataListAtom];
    let filterData = { ...cloneData.filter((item) => item.id === id)[0] };
    filterData.totalCount = inputRef.current ? Number(inputRef.current.value) : 0;
    filterData.setCount = setCountRef.current ? Number(setCountRef.current.value) : 0;
    let uploadData = [...cloneData.filter((item) => item.id !== id)];
    uploadData.push(filterData);
    uploadData.sort((a, b) => Number(a.id) - Number(b.id));
    setDataListAtom(uploadData);
  };

  const countCalculator = () => {
    if (inputRef.current && setCountRef.current) {
      setSet(Math.floor(Number(inputRef.current.value) / Number(setCountRef.current.value)));
      setCountNum(Number(inputRef.current.value) % Number(setCountRef.current.value));
    } else {
      setSet(0);
      setCountNum(0);
    }
  };

  const handleChangeTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue1(Number(val));
    countCalculator();
  };

  const handleChangeSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue2(Number(val));
    countCalculator();
  };

  useEffect(() => {
    countCalculator();
  }, []);

  return (
    <ListItemUI>
      <em>{name}</em>
      <p>
        <input type="tel" placeholder={'수량'} ref={inputRef} value={value1} onChange={(e) => handleChangeTotal(e)} />
      </p>
      <p>
        <input type="tel" ref={setCountRef} value={value2} onChange={(e) => handleChangeSet(e)} />
      </p>
      <strong>
        {isSet}
        <span>set</span>
        <br />
        <span>({isCountNum})</span>
      </strong>
      <BtnSave type="button" onClick={() => dataSave()}>
        저장
      </BtnSave>
    </ListItemUI>
  );
};

export default ListItem;

const ListItemUI = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 0.1rem solid #eee;
  em {
    display: block;
    width: 8rem;
    font-size: 1.4rem;
  }
  p {
    width: 6rem;
    border: 1px solid #eee;
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      outline: 0;
      width: calc(100% - 2px);
      padding: 1rem 0.5rem;
      font-size: 1.4rem;
      box-sizing: border-box;
      text-align: center;
    }
    & + p {
      margin: 0 0.5rem;
    }
  }
  strong {
    display: block;
    min-width: 4rem;
    padding: 0 0.5rem;
    font-weight: 700;
    font-size: 1.4rem;
    span {
      font-weight: 400;
      font-size: 1.1rem;
      color: #999;
    }
  }
`;

const BtnSave = styled.button`
  display: block;
  width: 5rem;
  height: 3rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #9d4d68;
  border-radius: 0.6rem;
`;
