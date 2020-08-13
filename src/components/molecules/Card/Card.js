import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  background-color: white;
  min-height: 18rem;
  box-shadow: 0 0 10px 1px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.2rem;
  padding: 1.4rem;
`;

const Card = ({ title, content }) => (
  <StyledWrapper>
    <Title>{title}</Title>
    <Paragraph>{content}</Paragraph>
  </StyledWrapper>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
