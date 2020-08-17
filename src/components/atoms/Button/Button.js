import styled, { css } from 'styled-components';
import plusIcon from 'assets/plus.svg';

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
    `}

  ${({ submit }) =>
    submit &&
    css`
      background-color: transparent;
      color: skyblue;
      padding: 0;
      margin: auto 0 0 auto;
      cursor: pointer;
    `}
`;

export default Button;
