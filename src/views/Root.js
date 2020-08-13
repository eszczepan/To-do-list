import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';
import Data from 'data';

const StyledGrid = styled.div`
  display: flex;
  padding: 0 3rem;
`;

class Root extends Component {
  state = {
    Data,
  };

  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <>
            <Header />
            <StyledGrid>
              {this.state.columnOrder.map((columnId) => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIDs.map(
                  (taskId) => this.state.tasks[taskId],
                );
                return (
                  <CardList
                    key={column.id}
                    tasks={tasks}
                    title={column.title}
                  />
                );
              })}
            </StyledGrid>
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default Root;
