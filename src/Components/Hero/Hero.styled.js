import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/img/bg-2.jpg") center center/cover no-repeat;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  padding: 0 6rem;
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .container {
    width: 80%;
    margin: auto;
  }

  h1 {
    font-size: 2.5rem;
  }
  p {
    margin: 2rem 0;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
  }

  .explore {
    color: ${({ theme }) => theme.colors.light};
    position: absolute;
    height: 3rem;
    width: 3rem;
    bottom: 3rem;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    animation: fly-down 2s 1s infinite;
  }

  @keyframes fly-down {
    from {
      transform: translateY(1rem);
    }
    to {
      transform: translateY(2.5rem);
      opacity: 0.5;
    }
  }
`;

export default HeroWrapper;
