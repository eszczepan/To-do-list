import React from 'react';
import styled from 'styled-components';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100vh;
`;

export const Title = () => (
  <StyledWrapper>
    <Input title placeholder="Wpisz tytuł..." />
  </StyledWrapper>
);
export const Description = () => (
  <StyledWrapper>
    <Input description placeholder="Tutaj wpisz opis..." />
  </StyledWrapper>
);
