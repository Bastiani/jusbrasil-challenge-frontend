// @flow
import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import styled from 'styled-components';

import type { GraphQLTaggedNode, Variables } from 'react-relay';

import Spinner from '../components/common/Spinner';

import environment from '../Environment';

import FailureView from './FailureView';

type Config = {
  query: ?GraphQLTaggedNode,
  queriesParams?: ?(props: Object) => Object,
  variables?: Variables,
  loadingView?: ?React.Node,
};

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 0);
  height: 100%;
`;

export default function createQueryRenderer(
  FragmentComponent: React.ComponentType<*>,
  config: Config,
): React.ComponentType<*> {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component<{}> {
    render() {
      const variables = queriesParams ? queriesParams(this.props) : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            if (props) {
              return <FragmentComponent {...this.props} query={props} />;
            }

            if (error) {
              return <FailureView error={error} retry={retry} />;
            }

            if (config.loadingView) {
              return config.loadingView;
            }

            return (
              <ContainerStyled>
                <Spinner />
              </ContainerStyled>
            );
          }}
        />
      );
    }
  }

  return QueryRendererWrapper;
}
