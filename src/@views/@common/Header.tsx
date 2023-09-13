import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { IntroViewRight } from '@styles/keyframes';
import { useRecoilState } from 'recoil';
import { pageModeAtom } from '@store/store';

const Header = () => {
  const [isPageModeAtom, setPageModeAtom] = useRecoilState(pageModeAtom);
  return (
    <HeaderUI>
      <h1>
        <Link href={'/'}>
          SORANOTE <span>.Ver1</span>
        </Link>
      </h1>
      <BtnToggle
        type="button"
        onClick={() => setPageModeAtom(!isPageModeAtom)}
        className={isPageModeAtom ? `active` : ``}>
        {isPageModeAtom ? `Type 재고` : `Type 생산`}
      </BtnToggle>
    </HeaderUI>
  );
};

export default Header;

const HeaderUI = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1.4rem;
  background-color: rgba(169, 71, 104, 0.1);
  box-sizing: border-box;
  z-index: 10;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(1rem);
    z-index: -1;
  }
  h1 {
    flex: auto;
    a {
      display: inline-block;
      font-style: italic;
      font-weight: 700;
      font-size: 1.6rem;
      color: rgba(169, 71, 104, 0.8);
      text-align: center;
      animation: ${IntroViewRight} 1s 0.2s both;
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 1.1rem;
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  p {
    display: flex;
    flex: 1 auto;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.3rem;
    button {
      display: inline-block;
      margin-left: 0.8rem;
      padding: 0.5rem;
      font-size: 1.2rem;
      color: #fff;
      background-color: #3a3a3a;
      border-radius: 0.4rem;
    }
  }
`;

const BtnToggle = styled.button`
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  line-height: 1;
  color: #fff;
  background-color: #333;
  border-radius: 0.5rem;
  transition: 0.2s;
  &.active {
    background-color: #9d4d68;
  }
`;
