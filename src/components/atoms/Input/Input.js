import styled, { css } from 'styled-components';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.3rem;
  width: 100%;
  ${({ title }) =>
    title &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 0.5px;
      margin-bottom: 0.7rem;
    `}

  ${({ description }) =>
    description &&
    css`
      width: 100%;
      height: 8rem;
    `}
`;

export default Input;
