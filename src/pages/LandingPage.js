// src/LandingPage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import deadbird from '../assests/Deadbird.png';

// Keyframes for text animation
const textAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Keyframes for image animation
const imageAnimation = keyframes`
  0% { transform: rotate(0); }
  50% { transform: rotate(5deg); }
  100% { transform: rotate(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
  background-color: white;
  position: relative;
`;

const Text = styled.div`
  font-size: 6rem;
  font-family: 'Helvetica Neue', sans-serif;
  text-align: center;
  animation: ${textAnimation} 2s ease-in-out;
  z-index: 2;
  color: black;
  text-shadow: 2px 2px #ffffff;
`;

const RedBlock = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
  position: absolute;
  bottom: 0;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20%;
  z-index: 1;
`;

const Image = styled.img`
  width: 40%;
  animation: ${imageAnimation} 3s infinite;
`;

const LandingPage = () => {
  return (
    <Container>
      <Text>#SAYHERNAME</Text>
      <ImageContainer>
        <Image src={deadbird} alt="Dead Bird" />
      </ImageContainer>
      <RedBlock />
    </Container>
  );
};

export default LandingPage;