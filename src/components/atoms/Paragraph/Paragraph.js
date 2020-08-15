import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.black};
  ${({ card }) =>
    card &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.bold};
    `}
`;

export default Paragraph;
