import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
`;

export const Normal = () => (
  <StyledWrapper>
    <Button>Normal</Button>
  </StyledWrapper>
);
export const Add = () => (
  <StyledWrapper>
    <Button add>Dodaj</Button>
  </StyledWrapper>
);
