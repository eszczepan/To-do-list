import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';
import { sort } from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainPage = (state) => {
  const { form, tasks, columns, columnOrder } = state;
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    state.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      ),
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Header />
        <StyledWrapper>
          {columnOrder.map((item, index) => {
            const newTasks = [];
            const column = columns[index];
            column.taskIds.map((taskId) =>
              tasks.forEach((task) => {
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
      </DragDropContext>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MainPage);
