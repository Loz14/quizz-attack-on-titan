// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  @media screen and (max-width: 500px) {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.mainBg};
    background-image: url(https://fsa.zobj.net/crop.php?r=jUKrDc9yC5TGBB4VeN7k8RKhL24PvkDlzE2WS5rFOBAxq6hOVJW7AcZ4-pkhCL-72X4L7C6TAKO0ipAEUYeNGNdgLjRvWOVra0Yu-80b0MtK3Z0J3-jqlmqPCdz69W7MThbjXetO0iafytoI);
  flex: 1;
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;