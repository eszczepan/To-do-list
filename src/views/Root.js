import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';
import Data from 'data';

const StyledWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
`;

class Root extends Component {
  state = Data;

  onDragStart = (start) => {
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
  };

  onDragEnd = (result) => {
    this.setState({
      homeIndex: null,
    });

    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    //Przenoszenie w obrębie jednej listy
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIDs);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIDs: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    //Przenoszenie z jednej listy do drugiej
    const startTaskIds = Array.from(start.taskIDs);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIDs: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIDs);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIDs: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <>
            <Header />
            <DragDropContext
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
            >
              <StyledWrapper>
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIDs.map(
                    (taskId) => this.state.tasks[taskId],
                  );

                  const isDropDisabled = index < this.state.homeIndex;

                  return (
                    <CardList
                      key={column.id}
                      tasks={tasks}
                      title={column.title}
                      column={column}
                      isDropDisabled={isDropDisabled}
                    />
                  );
                })}
              </StyledWrapper>
            </DragDropContext>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default Root;
