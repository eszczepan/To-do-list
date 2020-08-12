import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 1rem 3rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const Header = () => (
  <StyledHeader>
    <h1>Lista zadań</h1>
  </StyledHeader>
);

export default Header;
