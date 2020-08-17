import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { DragDropContext } from 'react-beautiful-dnd';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
`;

const MainPage = ({ form, tasks, columns, columnOrder }) => {
  // onDragStart = (start) => {
  //   const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

  //   this.setState({
  //     homeIndex,
  //   });
  // };

  // onDragEnd = (result) => {
  //   this.setState({
  //     homeIndex: null,
  //   });

  //   const { destination, source, draggableId } = result;

  //   if (!destination) return;

  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   )
  //     return;

  //   const start = this.state.columns[source.droppableId];
  //   const finish = this.state.columns[destination.droppableId];

  //   //Przenoszenie w obrębie jednej listy
  //   if (start === finish) {
  //     const newTaskIds = start.taskIDs;
  //     newTaskIds.splice(source.index, 1);
  //     newTaskIds.splice(destination.index, 0, draggableId);

  //     const newColumn = {
  //       ...start,
  //       taskIDs: newTaskIds,
  //     };

  //     const newState = {
  //       ...this.state,
  //       columns: {
  //         ...this.state.columns,
  //         [newColumn.id]: newColumn,
  //       },
  //     };

  //     this.setState(newState);
  //     return;
  //   }

  //   //Przenoszenie z jednej listy do drugiej
  //   const startTaskIds = start.taskIDs;
  //   startTaskIds.splice(source.index, 1);
  //   const newStart = {
  //     ...start,
  //     taskIDs: startTaskIds,
  //   };
  //   const finishTaskIds = Array.from(finish.taskIDs);
  //   finishTaskIds.splice(destination.index, 0, draggableId);
  //   const newFinish = {
  //     ...finish,
  //     taskIDs: finishTaskIds,
  //   };

  //   const newState = {
  //     ...this.state,
  //     columns: {
  //       ...this.state.columns,
  //       [newStart.id]: newStart,
  //       [newFinish.id]: newFinish,
  //     },
  //   };

  //   this.setState(newState);
  // };
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

          // const isDropDisabled = index < this.state.homeIndex;

          return (
            <CardList
              key={column.id}
              tasks={newTasks}
              title={column.title}
              column={column}
              form={form}
              // isDropDisabled={isDropDisabled}
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
