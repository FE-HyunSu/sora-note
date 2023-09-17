import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { dataListAtom } from '@store/store';

interface ProductItemT {
  id: string;
  name: string;
  productSetCount: number;
  productTotalCount: number;
}

const ProductItem = ({ name, id, productSetCount, productTotalCount }: ProductItemT) => {
  const [isDataListAtom, setDataListAtom] = useRecoilState(dataListAtom);
  const inputRef = useRef<HTMLInputElement>(null);
  const setCountRef = useRef<HTMLInputElement>(null);
  const [isSet, setSet] = useState<number>(0);
  const [value1, setValue1] = useState<number>(productTotalCount);
  const [value2, setValue2] = useState<number>(productSetCount);
  const [isChange, setChange] = useState<boolean>(false);

  const dataSave = () => {
    if (isChange) {
      let cloneData = [...isDataListAtom];
      let filterData = { ...cloneData.filter((item) => item.id === id)[0] };
      filterData.productSetCount = inputRef.current ? Number(inputRef.current.value) : 0;
      filterData.productTotalCount = setCountRef.current ? Number(setCountRef.current.value) : 0;
      let uploadData = [...cloneData.filter((item) => item.id !== id)];
      uploadData.push(filterData);
      uploadData.sort((a, b) => Number(a.id) - Number(b.id));
      setDataListAtom(uploadData);
      alert('저장되었습니다.');
      setChange(false);
    }
  };

  const changeCheck = () => {
    if (inputRef.current && setCountRef.current) {
      Number(setCountRef.current.value) !== productTotalCount || Number(inputRef.current.value) !== productSetCount
        ? setChange(true)
        : setChange(false);
    }
  };

  const countCalculator = () => {
    if (inputRef.current && setCountRef.current) {
      setSet(
        Number(setCountRef.current.value) * Number(inputRef.current.value) === 0
          ? 0
          : Math.floor(Number(setCountRef.current.value) * Number(inputRef.current.value))
      );
    } else {
      setSet(0);
    }
  };

  const handleChangeTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue1(Number(val));
    changeCheck();
    countCalculator();
  };

  const handleChangeSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue2(Number(val));
    changeCheck();
    countCalculator();
  };

  useEffect(() => {
    countCalculator();
  }, []);

  return (
    <ProductItemUI>
      <em>{name}</em>
      <p>
        <input
          type="tel"
          placeholder={'Total Set'}
          ref={setCountRef}
          value={value1}
          onChange={(e) => handleChangeTotal(e)}
        />
      </p>
      <p className="target">
        <input type="tel" placeholder={'Unit Set'} ref={inputRef} value={value2} onChange={(e) => handleChangeSet(e)} />
      </p>
      <strong>
        {isSet}
        <span>개</span>
      </strong>
      <BtnSave type="button" onClick={() => dataSave()} className={isChange ? `active` : ``}>
        저장
      </BtnSave>
    </ProductItemUI>
  );
};

export default ProductItem;

const ProductItemUI = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 0.1rem solid #eee;
  em {
    display: block;
    flex-shrink: 0;
    width: 8rem;
    font-size: 1.2rem;
  }
  p {
    width: auto;
    border: 1px solid #eee;
    &.target {
      flex-shrink: 0;
      width: 4rem;
      background-color: #eee;
    }
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      outline: 0;
      width: calc(100% - 2px);
      padding: 1rem 0.5rem;
      font-size: 1.4rem;
      background-color: transparent;
      box-sizing: border-box;
      text-align: center;
    }
    & + p {
      margin: 0 0.5rem;
    }
  }
  strong {
    display: block;
    flex: auto;
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
  flex-shrink: 0;
  width: 5rem;
  height: 3rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  color: #ccc;
  background-color: #999;
  border-radius: 0.6rem;
  &.active {
    color: #fff;
    background-color: #222;
  }
`;
