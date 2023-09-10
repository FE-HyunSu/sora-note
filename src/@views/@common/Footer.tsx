import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { IntroViewRight } from '@styles/keyframes';
import useIntersectionObserver from '@hooks/useIntersectionObserver';

const Footer = () => {
  const viewCheckItem = useRef<HTMLParagraphElement>(null);
  const isObserver = useIntersectionObserver(viewCheckItem, {});
  const isVisible = !!isObserver?.isIntersecting;

  return (
    <FooterUI>
      <p ref={viewCheckItem} className={isVisible ? `active` : ``}>
        <strong>&copy; Mason. All right reserved.</strong>
      </p>
    </FooterUI>
  );
};
export default Footer;

const FooterUI = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: #fff;
  border-top: 1px solid #f4f4f4;
  transition: 0.3s;
  p {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-size: 1.1rem;
    color: #ccc;
    text-align: center;
    transition: 0.3s;
    strong {
      display: block;
      font-weight: 300;
      font-size: 1.1rem;
      transform: translateX(-3rem);
      transition: 0.3s;
      opacity: 0;
    }
    &.active {
      a {
        animation: ${IntroViewRight} 1.2s both;
        opacity: 0.5;
      }
      strong {
        animation: ${IntroViewRight} 1.2s 0.1s both;
        opacity: 1;
      }
    }
  }
`;
