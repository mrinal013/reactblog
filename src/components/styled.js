import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
`;

const LoadingState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #dedede;
    opacity: 0.4;
    animation: ${loading} 1s linear 0.1s infinite alternate;
  }
`;

export default LoadingState;
