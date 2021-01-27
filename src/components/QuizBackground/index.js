// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.mainBg};
    background-image: url(${({ backgroundImageMobile }) => backgroundImageMobile});
    flex: 1;
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;