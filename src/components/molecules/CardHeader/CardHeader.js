import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CardHeader = ({ title, amount }) => (
  <StyledFlex>
    <Paragraph card>
      {title} ({amount})
    </Paragraph>
    <Button add>Dodaj</Button>
  </StyledFlex>
);

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CardHeader;
