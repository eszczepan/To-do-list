import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  ${({ card }) =>
    card &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`;

export default Paragraph;
