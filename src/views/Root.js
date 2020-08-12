import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import CardList from 'components/organisms/CardList/CardList';
import Header from 'components/atoms/Header/Header';

const StyledGrid = styled.div`
  display: flex;
  padding: 0 3rem;
`;

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Header />
        <StyledGrid>
          <CardList />
          <CardList />
          <CardList />
        </StyledGrid>
      </>
    </ThemeProvider>
  </>
);

export default Root;
