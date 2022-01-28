import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 5rem;
  background: transparent;
  color: #fff;
  position: fixed;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  &.active{
    background-color: ${({ theme }) => theme.colors.dark};
    height: 4rem;
    a:hover{
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.black};
  }
  }
  .logo {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      a {
        padding: 1.9rem 3rem;
        text-decoration: none;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.light};
        display: block;
        transition: .3s ease-in-out;
        &:hover {
        color: ${({ theme }) => theme.colors.primary};
          }
        
        }
      }
    }
  }
`;
