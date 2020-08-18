import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainPage = ({ form, tasks, columns, columnOrder }) => {
  return (
    <>
      <Header />
      <StyledWrapper>
        {columnOrder.map((item, index) => {
          const newTasks = [];
          const column = columns[index];
          column.taskIds.map((taskId) =>
            tasks.map((task) => {
              if (taskId === task.id) {
                return newTasks.push(task);
              }
            }),
          );

          return (
            <CardList
              key={column.id}
              tasks={newTasks}
              title={column.title}
              column={column}
              form={form}
            />
          );
        })}
      </StyledWrapper>
    </>
  );
};

MainPage.propTypes = {
  form: PropTypes.shape({
    isVisible: PropTypes.bool,
    column: PropTypes.number,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
};

MainPage.defaultProps = {
  tasks: [],
};

const mapStateToProps = (state) => {
  const { form, tasks, columns, columnOrder } = state;
  return { form, tasks, columns, columnOrder };
};

export default connect(mapStateToProps)(MainPage);
