import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
  min-height: 18rem;
  box-shadow: 0 0 10px 1px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  padding: 1.4rem 3rem 1.4rem 1.4rem;
  position: relative;
`;

const CardForm = () => (
  <StyledWrapper>
    <input type="text" />
    <input type="textarea" />
  </StyledWrapper>
);

export default CardForm;
