import { rgba } from "polished";
import styled from "styled-components";

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #ededed;

  .container {
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .side-bar{
        background: ${({ theme }) => rgba(theme.colors.primary, 0.8)};
      width: 20rem;
      height: 6rem;
      transform: rotate(90deg);
      position: absolute;
      left: 0%;
      z-index: 2;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        transform: rotate(-180deg);
        font-size: 3rem;
        font-style: normal;
        padding: 4rem 0;
        color: ${({ theme }) => theme.colors.dark};
            font-family: 'Comforter', cursive;
      }
    }

    .about-img {
      width: 35%;
      height: inherit;
    background: ${({ theme }) => theme.colors.secondary};
      img {
        width: 100%;
        filter: grayscale(0.9);
        height: 100%;
        object-fit: cover;
      }
    }
    .desc {
      width: 40%;
      background: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
      padding: 5rem;
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          width: 6rem;
          height: 0.1rem;
          background: ${({ theme }) => theme.colors.primary};
        }
        h1 {
          padding: 1rem 0;
          // font-family: "Comforter", cursive;
        }
      }
      p {
        text-align: justify;
      }

      .card-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;


        .card-item{
          width: 6.5rem;
          height 6.5rem;
          display: flex;
          flex-direction: column;
          text-align: center;
          border: 1px solid ${({ theme }) => theme.colors.primary};
          border-radius: .5rem;
          padding: 1rem;

          strong{
  color: ${({ theme }) => theme.colors.primary}
          }

        }
      }
    }
  }
`;

export default AboutWrapper;
