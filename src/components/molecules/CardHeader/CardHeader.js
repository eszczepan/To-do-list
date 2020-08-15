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

const CardHeader = ({ title, amount, column }) => {
  const handleButton = () => {
    if (column.id === 'column-1') {
      console.log('Button 1');
    }
    if (column.id === 'column-2') {
      console.log('Button 2');
    }
    if (column.id === 'column-3') {
      console.log('Button 3');
    }
  };
  return (
    <StyledFlex>
      <Paragraph card>
        {title} ({amount})
      </Paragraph>
      <Button add onClick={handleButton}>
        Dodaj
      </Button>
    </StyledFlex>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  column: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    taskIDs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CardHeader;
