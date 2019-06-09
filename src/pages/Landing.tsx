import React from 'react';
import styled from '@emotion/styled';
import Particles from 'react-particles-js';
import * as particlesJSON from './../utils/particles.json';
import { keyframes } from '@emotion/core';

const particlesParams: any = particlesJSON;

const randomFadeIn = keyframes`
  from {
    opacity: 0;
  }
  95% {
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom right,
    var(--black) 50%,
    black
  );
  background-size: cover;
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 1fr 2fr 1fr;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  @media (min-width: 1800px) {
    grid-template-columns: 3fr 4fr 1fr;
  }
`;

const StyledParticles = styled(Particles)`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

const Jumbotron = styled.div`
  align-self: end;
  color: var(--white);
  font-family: Audiowide, monospace;
  font-size: 24px;
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  margin: 16px;
  padding: 16px 62px;
  pointer-events: none;
  text-shadow: 2px 2px 2px black;
  user-select: none;
  @media (max-width: 980px) {
    grid-column: 1/3;
    text-align: center;
  }
`;

const H1 = styled.h1`
  animation: ${ randomFadeIn } ease-in-out 400ms;
`;

const H2 = styled.h2`
  animation: ${ randomFadeIn } ease-in-out 800ms;
`;

const H3 = styled.h3`
  animation: ${ randomFadeIn } ease-in-out 1600ms;
`;

const H4 = styled.h4`
  animation: ${ randomFadeIn } ease-in-out 2000ms;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Span = styled.span`
  font-family: 'Exo 2', sans-serif;
`;

export const Landing = () => {
  return <Wrapper>
    <StyledParticles params={ particlesParams }/>
    <Jumbotron>
      <H1>Hola.</H1>
      <H2>I'm Jose Diaz</H2>
      <H3>Full Stack Developer <Span>@</Span>Nologis</H3>
      <H4>Specialized in JavaScript, TypeScript, ReactJS and NodeJS.</H4>
    </Jumbotron>
  </Wrapper>;
};
