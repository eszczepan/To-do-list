import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CardHeader = ({ title, tasks }) => (
  <StyledFlex>
    <Paragraph card>
      {title} ({tasks})
    </Paragraph>
    <Button add>Dodaj</Button>
  </StyledFlex>
);

export default CardHeader;
