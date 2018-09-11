// @flow
import * as React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
`;
const Circle2 = styled(Circle)`
  transform: rotate(30deg);

  &:before {
    animation-delay: -1.1s;
  }
`;
const Circle3 = styled(Circle)`
  transform: rotate(60deg);

  &:before {
    animation-delay: -1s;
  }
`;
const Circle4 = styled(Circle)`
  transform: rotate(90deg);

  &:before {
    animation-delay: -0.9s;
  }
`;
const Circle5 = styled(Circle)`
  transform: rotate(120deg);

  &:before {
    animation-delay: -0.8s;
  }
`;
const Circle6 = styled(Circle)`
  transform: rotate(150deg);

  &:before {
    animation-delay: -0.7s;
  }
`;
const Circle7 = styled(Circle)`
  transform: rotate(180deg);

  &:before {
    animation-delay: -0.6s;
  }
`;
const Circle8 = styled(Circle)`
  transform: rotate(210deg);

  &:before {
    animation-delay: -0.5s;
  }
`;
const Circle9 = styled(Circle)`
  transform: rotate(240deg);

  &:before {
    animation-delay: -0.4s;
  }
`;
const Circle10 = styled(Circle)`
  transform: rotate(270deg);

  &:before {
    animation-delay: -0.3s;
  }
`;
const Circle11 = styled(Circle)`
  transform: rotate(300deg);

  &:before {
    animation-delay: -0.2s;
  }
`;
const Circle12 = styled(Circle)`
  transform: rotate(330deg);

  &:before {
    animation-delay: -0.1s;
  }
`;

const SpinnerStyled = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }

    40% {
      opacity: 1;
    }
  }
`;

const Spinner = () => (
  <SpinnerStyled>
    <Circle />
    <Circle2 />
    <Circle3 />
    <Circle4 />
    <Circle5 />
    <Circle6 />
    <Circle7 />
    <Circle8 />
    <Circle9 />
    <Circle10 />
    <Circle11 />
    <Circle12 />
  </SpinnerStyled>
);

export default Spinner;
