import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { graphql, createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';

import { BRL } from './components/common/Money';

import createQueryRenderer from './relay/createQueryRenderer';

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
    background-color: #edeef9;
  }
`;

const Container = styled.div`
  display: grid;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'header'
    'content';
`;

const Header = styled.div`
  padding: 10px;
  background-color: #edeef9;
  grid-area: header;
`;

const Content = styled.div`
  padding: 10px;
  margin-top: 45px;
  grid-area: content;
`;

const AppBarStyled = styled(AppBar)`
  && {
    background-color: #b9bdce;
  }
`;

const ToolbarStyled = styled(Toolbar)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #52489c;
`;

const IconButtonStyled = styled(IconButton)`
  margin-right: 10px;
`;

const App = ({ children, query }) => (
  <Container>
    <GlobalStyle />
    <Header>
      <AppBarStyled>
        <ToolbarStyled>
          <Typography variant="title" color="inherit" noWrap>
            <LinkStyled to="/">JusBrasil Challenge</LinkStyled>
          </Typography>
          <div>
            <LinkStyled to="/order/list">
              <IconButtonStyled aria-label="Cart">
                <Badge
                  badgeContent={query.orders.edges[0] ? query.orders.edges[0].node.qty : 0}
                  color="primary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButtonStyled>
            </LinkStyled>
            {query.orders.edges[0] ? BRL(query.orders.edges[0].node.total).format(true) : 'R$ 0'}
          </div>
        </ToolbarStyled>
      </AppBarStyled>
    </Header>
    <Content>{children}</Content>
  </Container>
);

const AppFragment = createFragmentContainer(App, {
  query: graphql`
    fragment App_query on Query @argumentDefinitions(first: { type: "Int", defaultValue: 1 }) {
      orders(first: $first, active: true) @connection(key: "App_orders", filters: []) {
        edges {
          node {
            id
            qty
            total
          }
        }
      }
    }
  `,
});

export default createQueryRenderer(AppFragment, {
  query: graphql`
    query AppQuery($first: Int) {
      ...App_query @arguments(first: $first)
    }
  `,
  variables: {
    first: 1,
  },
});
