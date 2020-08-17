import styled, { css } from 'styled-components';

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: transparent;
  border: none;
  outline: none;

  ${({ title }) =>
    title &&
    css`
      /* font-size: ${({ theme }) => theme.fontSize.xs}; */
      font-weight: ${({ theme }) => theme.bold};
      letter-spacing: 0.5px;
      margin-bottom: 1rem;
    `}

  ${({ description }) =>
    description &&
    css`
      /* font-size: ${({ theme }) => theme.fontSize.xs}; */
      width: 100%;
      height: 8rem;
    `}
`;

export default Input;
