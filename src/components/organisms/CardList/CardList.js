import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import CardHeader from 'components/molecules/CardHeader/CardHeader';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0;
  max-width: 30rem;
`;

const CardList = ({ title, tasks }) => (
  <StyledFlex>
    <CardHeader title={title} amount={tasks.length} />
    {tasks.map((task) => (
      <Card title={task.title} content={task.content} key={task.id} />
    ))}
  </StyledFlex>
);

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  tasks: [],
};

export default CardList;
