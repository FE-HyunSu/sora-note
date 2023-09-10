import React, { useRef } from 'react';
import styled from '@emotion/styled';

interface ListItemT {
  id: string;
  name: string;
  setCount: number;
}

const ListItem = ({ name, id, setCount }: ListItemT) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setCountRef = useRef<HTMLInputElement>(null);
  return (
    <ListItemUI>
      <em>{name}</em>
      <p>
        <input type="tel" placeholder={'수량'} ref={inputRef} />
      </p>
      <p>
        <input type="tel" value={setCount} ref={setCountRef} />
      </p>
      <strong>
        1800개
        <br />
        <span>(100Set/0)</span>
      </strong>
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
    width: 5rem;
    border: 1px solid #eee;
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      outline: 0;
      width: calc(100% - 2px);
      padding: 1rem;
      box-sizing: border-box;
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
`;
