import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { showCardForm } from 'actions';

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const CardHeader = ({ title, amount, column, showCardForm }) => {
  const handleButton = () => {
    if (column.id === 1) {
      showCardForm(column.id);
    }
    if (column.id === 2) {
      showCardForm(column.id);
    }
    if (column.id === 3) {
      showCardForm(column.id);
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
    id: PropTypes.number,
    title: PropTypes.string,
    taskIDs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showCardForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showCardForm: (columnId) => dispatch(showCardForm(columnId)),
});

export default connect(null, mapDispatchToProps)(CardHeader);
