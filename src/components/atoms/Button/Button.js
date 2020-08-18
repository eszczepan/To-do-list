import styled, { css } from 'styled-components';
import plusIcon from 'assets/icons/plus.svg';

const Button = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.black};
  font-family: 'Montserrat', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0 2rem;
  height: 3rem;
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;

  ${({ add }) =>
    add &&
    css`
      padding: 0 3.5rem 0 2rem;
      background-image: url(${plusIcon});
      background-size: 1rem;
      background-position: 85%;
      background-repeat: no-repeat;
      @media (max-width: 800px) {
        padding: 0 2.5rem 0 1.5rem;
      }
    `}

  ${({ submit }) =>
    submit &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.blue};
      padding: 0;
      margin: 1rem 0 0 auto;
      cursor: pointer;
    `}
`;

export default Button;
