import { keyframes } from '@emotion/react';

export const IntroBtn = keyframes`
  0%{width:5rem; color:rgba(169, 71, 104, 0.0); opacity:0; transform:translateY(10rem);}
  40%{width:5rem; color:rgba(169, 71, 104, 0.0); opacity:1; transform:translateY(-1rem);}
  100%{width:20rem; color:rgba(169, 71, 104, 0.6); opacity:1; transform:translateY(0);}
`;

export const IntroViewRight = keyframes`
  0% {opacity:0; transform:translateX(-3rem);}
  30% {opacity:1; transform:translateX(.5rem);}
  100% {opacity:1; transform:translateX(0);}
`;

export const MotionIntro = keyframes`
  0%{transform:scale(.1,.1)}
  50%{transform:scale(1.05,1.05)}
  100%{transform:scale(1,1)}
`;
