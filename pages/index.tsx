import React from 'react';
import styled from '@emotion/styled';
import { IntroBtn, IntroViewRight } from '@styles/keyframes';

const Index = () => {
  const alertInfo = () => {
    alert('준비중 입니다.');
  };
  return (
    <IntroUI>
      <Logo>
        <p>
          <strong></strong>
          <em>SORA NOTE</em>
          <span>sora's work-note</span>
        </p>
      </Logo>
      <BtnStart type="button" onClick={() => alertInfo()}>
        START
      </BtnStart>
    </IntroUI>
  );
};

export default Index;

const IntroUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 40rem;
  z-index: 10;
  background-color: #f3d2e0;
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }
`;

const Logo = styled.div`
  padding-bottom: 3rem;
  p {
    text-align: center;
    strong {
      display: block;
      position: relative;
      width: 5rem;
      height: 5rem;
      margin: -2rem auto 1rem;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: -0.5rem;
        width: 100%;
        height: 100%;
        background-color: rgba(169, 71, 104, 0.2);
        border-radius: 100%;
        animation: ${IntroViewRight} 1s both;
      }
      &:after {
        content: '';
        position: absolute;
        top: 3rem;
        right: 0;
        bottom: 0;
        left: 3.2rem;
        width: 40%;
        height: 40%;
        background-color: rgba(169, 71, 104, 0.2);
        border-radius: 100%;
        animation: ${IntroViewRight} 1s 0.1s both;
      }
    }
    em {
      display: block;
      font-style: italic;
      font-weight: 700;
      font-size: 2.4rem;
      color: #a94768;
      text-align: center;
      animation: ${IntroViewRight} 1s 0.2s both;
    }
    span {
      display: block;
      font-style: italic;
      font-size: 1.4rem;
      color: rgba(169, 71, 104, 0.4);
      animation: ${IntroViewRight} 1s 0.3s both;
    }
  }
`;

const BtnStart = styled.button`
  display: block;
  position: absolute;
  bottom: 4rem;
  width: 20rem;
  height: 5rem;
  font-size: 1.4rem;
  color: rgba(169, 71, 104, 0.6);
  background-color: rgba(169, 71, 104, 0.2);
  border-radius: 6rem;
  animation: ${IntroBtn} 1s both;
`;
