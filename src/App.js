import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ListProducts from './components/ListProducts';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 5vw 100vh;
`;

const Header = styled.div`
  padding: 10px;
  background-color: #edeef9;
`;

const Content = styled.div`
  padding: 10px;
  background-color: #edeef9;
`;

const AppBarStyled = styled(AppBar)`
  && {
    background-color: #b9bdce;
  }
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Header>
      <AppBarStyled>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            JusBrasil Challenge
          </Typography>
        </Toolbar>
      </AppBarStyled>
    </Header>
    <Content>
      <ListProducts />
    </Content>
  </Container>
);

export default App;
